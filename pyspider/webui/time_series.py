#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
# Author: Binux<i@binux.me>
#         http://binux.me
# Created on 2024-04-25 10:30:00

import time
import logging
import traceback
from flask import request, jsonify

from pyspider.webui.app import app
from pyspider.libs.time_series_store import time_series_store

logger = logging.getLogger('webui.time_series')

@app.route('/api/time_series', methods=['GET'])
def get_time_series():
    """Get time series data for projects"""
    logger.info(f"Received request for time_series: {request.url}")
    project = request.args.get('project')
    metric = request.args.get('metric')
    start_time = request.args.get('start_time')
    end_time = request.args.get('end_time')
    logger.info(f"Parameters: project={project}, metric={metric}, start_time={start_time}, end_time={end_time}")

    if start_time:
        try:
            start_time = float(start_time)
        except ValueError:
            return jsonify({
                'error': 'Invalid start_time parameter',
            }), 400

    if end_time:
        try:
            end_time = float(end_time)
        except ValueError:
            return jsonify({
                'error': 'Invalid end_time parameter',
            }), 400

    try:
        if project and metric:
            # Get data for a specific project and metric
            data = time_series_store.get_data(project, metric, start_time, end_time)
            logger.info(f"Returning data for project={project}, metric={metric}: {data}")
            return jsonify({project: {metric: data}})
        elif project:
            # Get all metrics for a specific project
            data = time_series_store.get_all_data(project, start_time, end_time)
            logger.info(f"Returning data for project={project}: {data}")
            return jsonify({project: data})
        else:
            # Get data for all projects
            data = time_series_store.get_all_data(None, start_time, end_time)
            logger.info(f"Returning data for all projects: {data}")
            return jsonify(data)
    except Exception as e:
        logger.error(f"Error in get_time_series: {str(e)}")
        logger.error(traceback.format_exc())
        return jsonify({'error': str(e)}), 500

@app.route('/api/time_series/metrics', methods=['GET'])
def get_available_metrics():
    """Get available metrics for time series data"""
    # Get all data
    all_data = time_series_store.get_all_data()

    # Extract unique metrics
    metrics = set()
    for project_data in all_data.values():
        metrics.update(project_data.keys())

    return jsonify(list(metrics))
