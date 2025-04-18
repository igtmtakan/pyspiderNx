#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
# Author: Binux<i@binux.me>
#         http://binux.me
# Created on 2014-02-22 23:20:39

import socket
import time

from six import iteritems, itervalues
from flask import render_template, request, json, jsonify
from pyspider.libs.log_utils import success_log, error_log, info_log
from pyspider.libs.time_series_store import time_series_store

try:
    import flask_login as login
except ImportError:
    from flask.ext import login

from .app import app

index_fields = ['name', 'group', 'status', 'comments', 'rate', 'burst', 'updatetime']


@app.route('/')
def index():
    projectdb = app.config['projectdb']
    projects = sorted(projectdb.get_all(fields=index_fields),
                      key=lambda k: (0 if k['group'] else 1, k['group'] or '', k['name']))
    return render_template("index.html", projects=projects)


@app.route('/dashboard')
def dashboard():
    projectdb = app.config['projectdb']
    projects = sorted(projectdb.get_all(fields=['name']),
                      key=lambda k: k['name'])
    return render_template("dashboard.html", projects=projects)


@app.route('/queues')
def get_queues():
    def try_get_qsize(queue):
        if queue is None:
            return 'None'
        try:
            return queue.qsize()
        except Exception as e:
            return "%r" % e

    result = {}
    queues = app.config.get('queues', {})
    for key in queues:
        result[key] = try_get_qsize(queues[key])
    return json.dumps(result), 200, {'Content-Type': 'application/json'}


@app.route('/update', methods=['POST', ])
def project_update():
    projectdb = app.config['projectdb']
    project = request.form['pk']
    name = request.form['name']
    value = request.form['value']

    project_info = projectdb.get(project, fields=('name', 'group'))
    if not project_info:
        return json.dumps({"status": "error", "message": "no such project."}), 404, {'Content-Type': 'application/json'}
    if 'lock' in projectdb.split_group(project_info.get('group')) \
            and not login.current_user.is_active():
        return app.login_response

    if name not in ('group', 'status', 'rate'):
        return json.dumps({"status": "error", "message": 'unknown field: %s' % name}), 400, {'Content-Type': 'application/json'}
    if name == 'rate':
        value = value.split('/')
        if len(value) != 2:
            return json.dumps({"status": "error", "message": 'format error: rate/burst'}), 400, {'Content-Type': 'application/json'}
        rate = float(value[0])
        burst = float(value[1])
        update = {
            'rate': min(rate, app.config.get('max_rate', rate)),
            'burst': min(burst, app.config.get('max_burst', burst)),
        }
    else:
        update = {
            name: value
        }

    ret = projectdb.update(project, update)
    if ret:
        rpc = app.config['scheduler_rpc']
        if rpc is not None:
            try:
                rpc.update_project()
            except socket.error as e:
                app.logger.warning('connect to scheduler rpc error: %r', e)
                return json.dumps({"status": "error", "message": "rpc error"}), 200, {'Content-Type': 'application/json'}
        return json.dumps({"status": "success"}), 200, {'Content-Type': 'application/json'}
    else:
        app.logger.warning("[webui index] projectdb.update() error - res: {}".format(ret))
        return json.dumps({"status": "error", "message": "update error"}), 500, {'Content-Type': 'application/json'}


@app.route('/counter')
def counter():
    rpc = app.config['scheduler_rpc']
    if rpc is None:
        app.logger.warning('scheduler_rpc is None, returning empty counter data')
        return json.dumps({})

    result = {}
    try:
        app.logger.debug('Fetching webui_update from scheduler')
        data = rpc.webui_update()
        app.logger.debug('webui_update data: %s', data)

        for type, counters in iteritems(data['counter']):
            app.logger.debug('Processing counter type: %s', type)
            for project, counter in iteritems(counters):
                app.logger.debug('Project: %s, Counter: %s', project, counter)

                # Ensure all required properties exist
                complete_counter = {
                    'pending': counter.get('pending', 0),
                    'success': counter.get('success', 0),
                    'retry': counter.get('retry', 0),
                    'failed': counter.get('failed', 0),
                }

                # Calculate task as the sum of all counters
                complete_counter['task'] = (
                    complete_counter['pending'] +
                    complete_counter['success'] +
                    complete_counter['retry'] +
                    complete_counter['failed']
                )

                # Add title
                complete_counter['title'] = 'pending: {pending}, success: {success}, retry: {retry}, failed: {failed}'.format(**complete_counter)

                result.setdefault(project, {})[type] = complete_counter

        for project, paused in iteritems(data['pause_status']):
            app.logger.debug('Project: %s, Paused: %s', project, paused)
            result.setdefault(project, {})['paused'] = paused

        # Ensure all projects have all time types
        for project in result:
            for time_type in ['5m', '1h', '1d', 'all']:
                if time_type not in result[project]:
                    app.logger.debug('Adding missing time type %s for project %s', time_type, project)
                    result[project][time_type] = {
                        'pending': 0,
                        'success': 0,
                        'retry': 0,
                        'failed': 0,
                        'task': 0,
                        'title': 'pending: 0, success: 0, retry: 0, failed: 0'
                    }

            # Add avg time data if not present
            if 'time' not in result[project]:
                app.logger.debug('Adding time data for project %s', project)
                result[project]['time'] = {
                    'fetch_time': 0.1,  # Default fetch time in seconds
                    'process_time': 0.05  # Default process time in seconds
                }
            else:
                app.logger.debug('Time data already exists for project %s: %s', project, result[project]['time'])
                # Ensure fetch_time and process_time are present
                if 'fetch_time' not in result[project]['time']:
                    result[project]['time']['fetch_time'] = 0.1
                if 'process_time' not in result[project]['time']:
                    result[project]['time']['process_time'] = 0.05

        app.logger.debug('Final counter result: %s', result)
    except socket.error as e:
        app.logger.warning('connect to scheduler rpc error: %r', e)
        return json.dumps({}), 200, {'Content-Type': 'application/json'}
    except Exception as e:
        app.logger.error('Error in counter endpoint: %r', e)
        return json.dumps({}), 200, {'Content-Type': 'application/json'}

    return json.dumps(result), 200, {'Content-Type': 'application/json'}


@app.route('/run', methods=['POST', 'GET'])
def runtask():
    # Log the request details
    app.logger.info("Run button clicked. Request method: %s", request.method)
    app.logger.info("Run button clicked. Request form data: %s", request.form)
    app.logger.info("Run button clicked. Request args: %s", request.args)
    app.logger.info("Run button clicked. Request headers: %s", dict(request.headers))
    app.logger.info("Run button clicked. Request remote address: %s", request.remote_addr)

    rpc = app.config['scheduler_rpc']
    if rpc is None:
        app.logger.error("Run button clicked but scheduler_rpc is None")
        return render_template("run_result.html", result=False, error="No scheduler_rpc available")

    projectdb = app.config['projectdb']

    # Get project name from either form data or query parameters
    if request.method == 'POST':
        project = request.form.get('project')
    else:  # GET
        project = request.args.get('project')

    if not project:
        app.logger.error("Run button clicked but no project specified")
        return render_template("run_result.html", result=False, error="No project specified")

    app.logger.info("Run button clicked for project: %s", project)

    project_info = projectdb.get(project, fields=('name', 'group', 'status'))
    if not project_info:
        app.logger.error("Run button clicked for non-existent project: %s", project)
        return render_template("run_result.html", result=False, error="No such project")

    app.logger.info("Project info: %s", project_info)

    if 'lock' in projectdb.split_group(project_info.get('group')) \
            and not login.current_user.is_active():
        app.logger.warning("Run button clicked for locked project: %s", project)
        return app.login_response

    # Check if project status is RUNNING or DEBUG
    if project_info.get('status') not in ('RUNNING', 'DEBUG'):
        app.logger.warning("Run button clicked for project with invalid status: %s, status: %s",
                         project, project_info.get('status'))
        return render_template("run_result.html", result=False,
                              error="Project is not started, please set status to RUNNING or DEBUG.",
                              project_name=project)

    app.logger.info("Creating newtask for project: %s", project)
    newtask = {
        "project": project,
        "taskid": "on_start",
        "url": "data:,on_start",
        "process": {
            "callback": "on_start",
        },
        "schedule": {
            "age": 0,
            "priority": 9,
            "force_update": True,
        },
    }
    app.logger.info("Newtask details: %s", newtask)

    try:
        info_log(app.logger, "[RUN] Sending newtask to scheduler for project: %s", project)
        ret = rpc.newtask(newtask)
        success_log(app.logger, "[RUN SUCCESS] Task executed for project %s, result: %s", project, ret)
    except socket.error as e:
        error_log(app.logger, '[RUN ERROR] Connect to scheduler rpc error for project %s: %r', project, e)
        return render_template("run_result.html", result=False, error="Connect to scheduler rpc error", project_name=project)
    except Exception as e:
        error_log(app.logger, '[RUN ERROR] Task execution failed for project %s: %r', project, e)
        return render_template("run_result.html", result=False, error=str(e), project_name=project)

    success_log(app.logger, "[RUN SUCCESS] Task completed successfully for project: %s", project)
    # Return success page
    return render_template("run_result.html", result=True, project_name=project)


@app.route('/run_result')
def run_result():
    project_name = request.args.get('project', '')
    result = request.args.get('result', 'false').lower() == 'true'
    error = request.args.get('error', '')
    return render_template("run_result.html", result=result, error=error, project_name=project_name)


@app.route('/api/avg_time')
def get_avg_time():
    """Get average time data for all projects"""
    rpc = app.config['scheduler_rpc']
    if rpc is None:
        app.logger.warning('scheduler_rpc is None, returning empty avg_time data')
        return json.dumps({}), 200, {'Content-Type': 'application/json'}

    result = {}
    try:
        # Get project data from scheduler
        data = rpc.webui_update()

        # Get all projects from counter data
        projects = set()
        for counter_type in data.get('counter', {}):
            for project_name in data['counter'][counter_type]:
                projects.add(project_name)

        # Add projects from pause_status
        for project_name in data.get('pause_status', {}):
            projects.add(project_name)

        # Process each project
        for project_name in projects:
            # Get time data from counter if available
            time_data = {}

            # Try to get time data from counter
            if 'counter' in data and '5m_time' in data['counter'] and project_name in data['counter'].get('5m_time', {}):
                time_data = data['counter']['5m_time'][project_name]

            # If no time data, use default values
            if not time_data:
                time_data = {
                    'fetch_time': 0.1,  # Default fetch time in seconds
                    'process_time': 0.05  # Default process time in seconds
                }

            # Ensure fetch_time and process_time are present
            if 'fetch_time' not in time_data:
                time_data['fetch_time'] = 0.1
            if 'process_time' not in time_data:
                time_data['process_time'] = 0.05

            # Calculate total time
            time_data['total_time'] = time_data['fetch_time'] + time_data['process_time']

            # Get task counts for remaining time calculation
            task_counts = {
                'total': 0,
                'success': 0,
                'failed': 0,
                'pending': 0
            }

            # Get task counts from counter data
            if 'counter' in data and 'all' in data['counter'] and project_name in data['counter']['all']:
                counter_data = data['counter']['all'][project_name]
                task_counts['total'] = counter_data.get('total', 0)
                task_counts['success'] = counter_data.get('success', 0)
                task_counts['failed'] = counter_data.get('failed', 0)

            # Calculate pending tasks
            task_counts['pending'] = max(0, task_counts['total'] - task_counts['success'] - task_counts['failed'])

            # Calculate remaining time (in seconds)
            remaining_time = 0
            if task_counts['pending'] > 0 and time_data['total_time'] > 0:
                remaining_time = task_counts['pending'] * time_data['total_time']

            # Add task counts and remaining time to result
            time_data['task_counts'] = task_counts
            time_data['remaining_time'] = remaining_time

            # Add to result
            result[project_name] = time_data

        # If no projects found in data, get all projects from projectdb
        if not result:
            projectdb = app.config['projectdb']
            projects = projectdb.get_all(fields=['name'])

            for project in projects:
                project_name = project['name']
                result[project_name] = {
                    'fetch_time': 0.1,
                    'process_time': 0.05,
                    'total_time': 0.15,
                    'task_counts': {
                        'total': 0,
                        'success': 0,
                        'failed': 0,
                        'pending': 0
                    },
                    'remaining_time': 0
                }

        app.logger.debug('Avg time API result: %s', result)

        # Store time series data
        current_time = time.time()
        for project_name, project_data in result.items():
            # Store success rate
            task_counts = project_data.get('task_counts', {})
            total_tasks = task_counts.get('total', 0) + task_counts.get('success', 0) + task_counts.get('failed', 0) + task_counts.get('pending', 0)
            success_tasks = task_counts.get('success', 0)
            success_rate = (success_tasks / total_tasks * 100) if total_tasks > 0 else 0
            time_series_store.add_data_point(project_name, 'success_rate', success_rate)

            # Store process time
            process_time = project_data.get('process_time', 0)
            time_series_store.add_data_point(project_name, 'process_time', process_time)

            # Store fetch time
            fetch_time = project_data.get('fetch_time', 0)
            time_series_store.add_data_point(project_name, 'fetch_time', fetch_time)

            # Store total time
            total_time = project_data.get('total_time', 0)
            time_series_store.add_data_point(project_name, 'total_time', total_time)

            # Store remaining time
            remaining_time = project_data.get('remaining_time', 0)
            time_series_store.add_data_point(project_name, 'remaining_time', remaining_time)
    except socket.error as e:
        app.logger.warning('connect to scheduler rpc error: %r', e)
        return json.dumps({}), 200, {'Content-Type': 'application/json'}
    except Exception as e:
        app.logger.error('Error in avg_time endpoint: %r', e)
        return json.dumps({}), 200, {'Content-Type': 'application/json'}

    return jsonify(result)


@app.route('/robots.txt')
def robots():
    return """User-agent: *
Disallow: /
Allow: /$
Allow: /debug
Allow: /selector_tester
Disallow: /debug/*?taskid=*
""", 200, {'Content-Type': 'text/plain'}


@app.route('/selector_tester')
def selector_tester_page():
    return render_template("selector_tester.html")
