#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
# Author: Binux<i@binux.me>
#         http://binux.me
# Created on 2024-04-30 10:00:00

"""
Debug Tools for PySpider
"""

import os
import json
import time
import logging
from flask import render_template, request, jsonify, Response, flash, redirect, url_for

try:
    import flask_login as login
except ImportError:
    from flask.ext import login

from pyspider.debugger import InteractiveDebugger, RequestInspector, ResponseInspector, PerformanceProfiler
from .app import app

logger = logging.getLogger('webui.debug_tools')

# Create global instances
interactive_debugger = InteractiveDebugger()
request_inspector = RequestInspector()
response_inspector = ResponseInspector()
performance_profiler = PerformanceProfiler()

# Debug tools routes
@app.route('/debug_tools')
def debug_tools():
    """Debug tools main page"""
    return render_template('debug_tools.html')

# Interactive Debugger API
@app.route('/api/debugger/start', methods=['POST'])
def debugger_start():
    """Start the debugger"""
    result = interactive_debugger.start(callback=_debugger_callback)
    return jsonify({'success': result})

@app.route('/api/debugger/stop', methods=['POST'])
def debugger_stop():
    """Stop the debugger"""
    result = interactive_debugger.stop()
    return jsonify({'success': result})

@app.route('/api/debugger/step_into', methods=['POST'])
def debugger_step_into():
    """Step into the next line"""
    result = interactive_debugger.step_into()
    return jsonify({'success': result})

@app.route('/api/debugger/step_over', methods=['POST'])
def debugger_step_over():
    """Step over the next line"""
    result = interactive_debugger.step_over()
    return jsonify({'success': result})

@app.route('/api/debugger/step_out', methods=['POST'])
def debugger_step_out():
    """Step out of the current function"""
    result = interactive_debugger.step_out()
    return jsonify({'success': result})

@app.route('/api/debugger/continue', methods=['POST'])
def debugger_continue():
    """Continue execution"""
    result = interactive_debugger.continue_execution()
    return jsonify({'success': result})

@app.route('/api/debugger/breakpoints', methods=['GET'])
def debugger_get_breakpoints():
    """Get all breakpoints"""
    breakpoints = interactive_debugger.get_all_breaks()
    return jsonify({'breakpoints': [vars(bp) for bp in breakpoints]})

@app.route('/api/debugger/breakpoints', methods=['POST'])
def debugger_set_breakpoint():
    """Set a breakpoint"""
    data = request.json
    filename = data.get('filename')
    lineno = data.get('lineno')
    condition = data.get('condition')
    
    if not filename or not lineno:
        return jsonify({'success': False, 'error': 'Filename and line number are required'})
    
    try:
        lineno = int(lineno)
    except ValueError:
        return jsonify({'success': False, 'error': 'Line number must be an integer'})
    
    breakpoint = interactive_debugger.set_break(filename, lineno, condition)
    if breakpoint:
        return jsonify({'success': True, 'breakpoint': vars(breakpoint)})
    else:
        return jsonify({'success': False, 'error': 'Failed to set breakpoint'})

@app.route('/api/debugger/breakpoints/<path:filename>/<int:lineno>', methods=['DELETE'])
def debugger_clear_breakpoint(filename, lineno):
    """Clear a breakpoint"""
    result = interactive_debugger.clear_break(filename, lineno)
    return jsonify({'success': result})

@app.route('/api/debugger/breakpoints/<path:filename>/<int:lineno>/enable', methods=['POST'])
def debugger_enable_breakpoint(filename, lineno):
    """Enable a breakpoint"""
    result = interactive_debugger.enable_break(filename, lineno)
    return jsonify({'success': result})

@app.route('/api/debugger/breakpoints/<path:filename>/<int:lineno>/disable', methods=['POST'])
def debugger_disable_breakpoint(filename, lineno):
    """Disable a breakpoint"""
    result = interactive_debugger.disable_break(filename, lineno)
    return jsonify({'success': result})

@app.route('/api/debugger/breakpoints/clear', methods=['POST'])
def debugger_clear_all_breakpoints():
    """Clear all breakpoints"""
    result = interactive_debugger.clear_all_breaks()
    return jsonify({'success': result})

@app.route('/api/debugger/evaluate', methods=['POST'])
def debugger_evaluate():
    """Evaluate an expression"""
    data = request.json
    expression = data.get('expression')
    
    if not expression:
        return jsonify({'success': False, 'error': 'Expression is required'})
    
    result = interactive_debugger.evaluate_expression(expression)
    return jsonify(result)

@app.route('/api/debugger/execute', methods=['POST'])
def debugger_execute():
    """Execute a statement"""
    data = request.json
    statement = data.get('statement')
    
    if not statement:
        return jsonify({'success': False, 'error': 'Statement is required'})
    
    result = interactive_debugger.execute_statement(statement)
    return jsonify(result)

@app.route('/api/debugger/variables', methods=['GET'])
def debugger_get_variables():
    """Get variables in the current frame"""
    if interactive_debugger.state != 'paused' or not interactive_debugger.current_frame_info:
        return jsonify({'success': False, 'error': 'Debugger not paused'})
    
    return jsonify({
        'success': True,
        'locals': interactive_debugger.current_frame_info.get('locals', {}),
        'globals': interactive_debugger.current_frame_info.get('globals', {})
    })

@app.route('/api/debugger/variable/<name>', methods=['GET'])
def debugger_get_variable(name):
    """Get a variable value"""
    result = interactive_debugger.get_variable_value(name)
    return jsonify(result)

@app.route('/api/debugger/variable/<name>', methods=['POST'])
def debugger_set_variable(name):
    """Set a variable value"""
    data = request.json
    value = data.get('value')
    
    if value is None:
        return jsonify({'success': False, 'error': 'Value is required'})
    
    result = interactive_debugger.set_variable_value(name, value)
    return jsonify(result)

@app.route('/api/debugger/watch', methods=['POST'])
def debugger_watch_expression():
    """Evaluate a watch expression"""
    data = request.json
    expression = data.get('expression')
    
    if not expression:
        return jsonify({'success': False, 'error': 'Expression is required'})
    
    result = interactive_debugger.get_watch_expression_value(expression)
    return jsonify(result)

@app.route('/api/debugger/stack', methods=['GET'])
def debugger_get_stack():
    """Get the call stack"""
    stack = interactive_debugger.get_call_stack()
    return jsonify({'success': True, 'stack': stack})

@app.route('/api/debugger/frame/<int:frame_index>', methods=['POST'])
def debugger_jump_to_frame(frame_index):
    """Jump to a specific frame in the call stack"""
    result = interactive_debugger.jump_to_frame(frame_index)
    return jsonify(result)

@app.route('/api/debugger/source/<path:filename>', methods=['GET'])
def debugger_get_source(filename):
    """Get the source code of a file"""
    result = interactive_debugger.get_source_file(filename)
    return jsonify(result)

@app.route('/api/debugger/debug', methods=['POST'])
def debugger_debug_script():
    """Debug a script"""
    data = request.json
    script = data.get('script')
    globals_dict = data.get('globals', {})
    
    if not script:
        return jsonify({'success': False, 'error': 'Script is required'})
    
    result = interactive_debugger.debug_script(script, globals_dict)
    return jsonify(result)

@app.route('/api/debugger/output', methods=['GET'])
def debugger_get_output():
    """Get captured output"""
    output = interactive_debugger.get_output()
    return jsonify({'success': True, 'output': output})

@app.route('/api/debugger/output/clear', methods=['POST'])
def debugger_clear_output():
    """Clear captured output"""
    result = interactive_debugger.clear_output()
    return jsonify({'success': result})

def _debugger_callback(data):
    """Callback function for the debugger"""
    # This would be used with WebSockets in a real implementation
    # For now, we'll just log the data
    logger.debug(f"Debugger callback: {data}")

# Request Inspector API
@app.route('/api/inspector/requests', methods=['GET'])
def inspector_get_requests():
    """Get all requests"""
    requests = request_inspector.get_all_requests()
    return jsonify({'success': True, 'requests': requests})

@app.route('/api/inspector/responses', methods=['GET'])
def inspector_get_responses():
    """Get all responses"""
    responses = request_inspector.get_all_responses()
    return jsonify({'success': True, 'responses': responses})

@app.route('/api/inspector/request/<request_id>', methods=['GET'])
def inspector_get_request(request_id):
    """Get a request"""
    request_data = request_inspector.get_request(request_id)
    if request_data:
        return jsonify({'success': True, 'request': request_data})
    else:
        return jsonify({'success': False, 'error': 'Request not found'})

@app.route('/api/inspector/response/<request_id>', methods=['GET'])
def inspector_get_response(request_id):
    """Get a response"""
    response_data = request_inspector.get_response(request_id)
    if response_data:
        return jsonify({'success': True, 'response': response_data})
    else:
        return jsonify({'success': False, 'error': 'Response not found'})

@app.route('/api/inspector/request_response/<request_id>', methods=['GET'])
def inspector_get_request_response(request_id):
    """Get a request and response"""
    data = request_inspector.get_request_response(request_id)
    if data:
        return jsonify({'success': True, 'data': data})
    else:
        return jsonify({'success': False, 'error': 'Request/response not found'})

@app.route('/api/inspector/clear', methods=['POST'])
def inspector_clear_all():
    """Clear all requests and responses"""
    request_inspector.clear_all()
    return jsonify({'success': True})

@app.route('/api/inspector/request/<request_id>', methods=['DELETE'])
def inspector_delete_request(request_id):
    """Delete a request"""
    result = request_inspector.delete_request(request_id)
    return jsonify({'success': result})

@app.route('/api/inspector/request/<request_id>/modify', methods=['POST'])
def inspector_modify_request(request_id):
    """Modify a request"""
    data = request.json
    modifications = data.get('modifications', {})
    
    modified_request = request_inspector.modify_request(request_id, modifications)
    if modified_request:
        return jsonify({'success': True, 'request': modified_request})
    else:
        return jsonify({'success': False, 'error': 'Failed to modify request'})

@app.route('/api/inspector/request/<request_id>/resend', methods=['POST'])
def inspector_resend_request(request_id):
    """Resend a request"""
    data = request.json
    modifications = data.get('modifications')
    
    new_request = request_inspector.resend_request(request_id, modifications)
    if new_request:
        return jsonify({'success': True, 'request': new_request})
    else:
        return jsonify({'success': False, 'error': 'Failed to resend request'})

@app.route('/api/inspector/filter', methods=['POST'])
def inspector_set_filter():
    """Set a filter"""
    data = request.json
    filter_name = data.get('name')
    filter_value = data.get('value')
    
    if not filter_name:
        return jsonify({'success': False, 'error': 'Filter name is required'})
    
    result = request_inspector.set_filter(filter_name, filter_value)
    return jsonify({'success': result})

@app.route('/api/inspector/filter/<filter_name>/clear', methods=['POST'])
def inspector_clear_filter(filter_name):
    """Clear a filter"""
    result = request_inspector.clear_filter(filter_name)
    return jsonify({'success': result})

@app.route('/api/inspector/filter/clear', methods=['POST'])
def inspector_clear_all_filters():
    """Clear all filters"""
    result = request_inspector.clear_filter()
    return jsonify({'success': result})

@app.route('/api/inspector/filtered_requests', methods=['GET'])
def inspector_get_filtered_requests():
    """Get filtered requests"""
    requests = request_inspector.get_filtered_requests()
    return jsonify({'success': True, 'requests': requests})

@app.route('/api/inspector/filtered_responses', methods=['GET'])
def inspector_get_filtered_responses():
    """Get filtered responses"""
    responses = request_inspector.get_filtered_responses()
    return jsonify({'success': True, 'responses': responses})

@app.route('/api/inspector/websocket_messages', methods=['GET'])
def inspector_get_websocket_messages():
    """Get all WebSocket messages"""
    messages = request_inspector.get_all_websocket_messages()
    return jsonify({'success': True, 'messages': messages})

@app.route('/api/inspector/websocket_message/<message_id>', methods=['GET'])
def inspector_get_websocket_message(message_id):
    """Get a WebSocket message"""
    message = request_inspector.get_websocket_message(message_id)
    if message:
        return jsonify({'success': True, 'message': message})
    else:
        return jsonify({'success': False, 'error': 'Message not found'})

@app.route('/api/inspector/websocket_messages/clear', methods=['POST'])
def inspector_clear_websocket_messages():
    """Clear all WebSocket messages"""
    request_inspector.clear_websocket_messages()
    return jsonify({'success': True})

@app.route('/api/inspector/har', methods=['POST'])
def inspector_save_to_har():
    """Save requests and responses to HAR format"""
    data = request.json
    filename = data.get('filename')
    
    if not filename:
        return jsonify({'success': False, 'error': 'Filename is required'})
    
    result = request_inspector.save_to_har(filename)
    return jsonify({'success': result})

@app.route('/api/inspector/compare', methods=['POST'])
def inspector_compare_requests():
    """Compare two requests"""
    data = request.json
    request_id1 = data.get('request_id1')
    request_id2 = data.get('request_id2')
    
    if not request_id1 or not request_id2:
        return jsonify({'success': False, 'error': 'Two request IDs are required'})
    
    result = request_inspector.compare_requests(request_id1, request_id2)
    return jsonify(result)

# Performance Profiler API
@app.route('/api/profiler/cpu/start', methods=['POST'])
def profiler_start_cpu():
    """Start CPU profiling"""
    result = performance_profiler.start_profiling()
    return jsonify({'success': result})

@app.route('/api/profiler/cpu/stop', methods=['POST'])
def profiler_stop_cpu():
    """Stop CPU profiling"""
    result = performance_profiler.stop_profiling()
    return jsonify(result)

@app.route('/api/profiler/memory/start', methods=['POST'])
def profiler_start_memory():
    """Start memory tracking"""
    result = performance_profiler.start_memory_tracking()
    return jsonify({'success': result})

@app.route('/api/profiler/memory/stop', methods=['POST'])
def profiler_stop_memory():
    """Stop memory tracking"""
    result = performance_profiler.stop_memory_tracking()
    return jsonify(result)

@app.route('/api/profiler/memory/snapshot', methods=['POST'])
def profiler_take_memory_snapshot():
    """Take a memory snapshot"""
    data = request.json
    label = data.get('label')
    
    result = performance_profiler.take_memory_snapshot(label)
    return jsonify(result)

@app.route('/api/profiler/memory/compare', methods=['POST'])
def profiler_compare_memory_snapshots():
    """Compare two memory snapshots"""
    data = request.json
    snapshot1_index = data.get('snapshot1_index')
    snapshot2_index = data.get('snapshot2_index')
    
    if snapshot1_index is None or snapshot2_index is None:
        return jsonify({'success': False, 'error': 'Two snapshot indices are required'})
    
    result = performance_profiler.compare_memory_snapshots(snapshot1_index, snapshot2_index)
    return jsonify(result)

@app.route('/api/profiler/timing/start', methods=['POST'])
def profiler_start_timing():
    """Start timing a section of code"""
    data = request.json
    name = data.get('name')
    
    if not name:
        return jsonify({'success': False, 'error': 'Name is required'})
    
    result = performance_profiler.start_timing(name)
    return jsonify({'success': result})

@app.route('/api/profiler/timing/stop', methods=['POST'])
def profiler_stop_timing():
    """Stop timing a section of code"""
    data = request.json
    name = data.get('name')
    
    if not name:
        return jsonify({'success': False, 'error': 'Name is required'})
    
    result = performance_profiler.stop_timing(name)
    return jsonify(result)

@app.route('/api/profiler/timing/reset', methods=['POST'])
def profiler_reset_timing():
    """Reset timing statistics"""
    data = request.json
    name = data.get('name')
    
    result = performance_profiler.reset_timing(name)
    return jsonify({'success': result})

@app.route('/api/profiler/timing', methods=['GET'])
def profiler_get_timing_stats():
    """Get timing statistics"""
    name = request.args.get('name')
    
    result = performance_profiler.get_timing_stats(name)
    return jsonify(result)

@app.route('/api/profiler/function', methods=['GET'])
def profiler_get_function_stats():
    """Get function statistics"""
    func_name = request.args.get('name')
    
    result = performance_profiler.get_function_stats(func_name)
    return jsonify(result)

@app.route('/api/profiler/function/reset', methods=['POST'])
def profiler_reset_function_stats():
    """Reset function statistics"""
    data = request.json
    func_name = data.get('name')
    
    result = performance_profiler.reset_function_stats(func_name)
    return jsonify({'success': result})

@app.route('/api/profiler/gc', methods=['POST'])
def profiler_collect_garbage():
    """Collect garbage"""
    result = performance_profiler.collect_garbage()
    return jsonify(result)

@app.route('/api/profiler/memory_usage', methods=['GET'])
def profiler_get_memory_usage():
    """Get current memory usage"""
    result = performance_profiler.get_memory_usage()
    return jsonify(result)

@app.route('/api/profiler/report', methods=['GET'])
def profiler_generate_report():
    """Generate a comprehensive performance report"""
    result = performance_profiler.generate_report()
    return jsonify(result)

@app.route('/api/profiler/report/save', methods=['POST'])
def profiler_save_report():
    """Save performance report to a file"""
    data = request.json
    filename = data.get('filename')
    
    if not filename:
        return jsonify({'success': False, 'error': 'Filename is required'})
    
    result = performance_profiler.save_report(filename)
    return jsonify(result)

@app.route('/api/profiler/resources/start', methods=['POST'])
def profiler_start_resource_monitoring():
    """Start monitoring system resources"""
    result = performance_profiler.start_resource_monitoring()
    return jsonify({'success': result})

@app.route('/api/profiler/resources/stop', methods=['POST'])
def profiler_stop_resource_monitoring():
    """Stop monitoring system resources"""
    result = performance_profiler.stop_resource_monitoring()
    return jsonify(result)

@app.route('/api/profiler/resources', methods=['GET'])
def profiler_get_resource_usage():
    """Get resource usage data"""
    result = performance_profiler.get_resource_usage()
    return jsonify(result)

@app.route('/api/profiler/network', methods=['GET'])
def profiler_get_network_stats():
    """Get network statistics"""
    result = performance_profiler.get_network_stats()
    return jsonify(result)

@app.route('/api/profiler/network/reset', methods=['POST'])
def profiler_reset_network_stats():
    """Reset network statistics"""
    result = performance_profiler.reset_network_stats()
    return jsonify({'success': result})

@app.route('/api/profiler/code', methods=['POST'])
def profiler_profile_code_block():
    """Profile a block of code"""
    data = request.json
    code = data.get('code')
    globals_dict = data.get('globals')
    locals_dict = data.get('locals')
    
    if not code:
        return jsonify({'success': False, 'error': 'Code is required'})
    
    result = performance_profiler.profile_code_block(code, globals_dict, locals_dict)
    return jsonify(result)

@app.route('/api/profiler/fps', methods=['GET'])
def profiler_get_frame_rate():
    """Get estimated frame rate"""
    window_size = request.args.get('window_size', 10, type=int)
    
    result = performance_profiler.get_frame_rate(window_size)
    return jsonify(result)
