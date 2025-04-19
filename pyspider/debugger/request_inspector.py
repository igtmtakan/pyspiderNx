#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
# Author: Binux<i@binux.me>
#         http://binux.me
# Created on 2024-04-30 10:00:00

"""
Request Inspector for PySpider
"""

import json
import logging
import time
import uuid
from typing import Dict, List, Any, Optional, Union
from urllib.parse import urlparse, parse_qsl, urlencode, urlunparse

logger = logging.getLogger('debugger.request_inspector')

class RequestInspector:
    """Request inspector for PySpider"""

    def __init__(self):
        self.requests = {}
        self.max_requests = 100
        self.filters = {
            'method': None,
            'status_code': None,
            'host': None,
            'path': None,
            'content_type': None,
            'min_size': None,
            'max_size': None,
            'search_text': None
        }
        self.websocket_messages = {}
        self.max_websocket_messages = 100
        self.request_hooks = []
        self.response_hooks = []

    def inspect_request(self, request: Dict[str, Any]) -> Dict[str, Any]:
        """Inspect a request"""
        # Generate request ID
        request_id = str(uuid.uuid4())

        # Parse URL
        url = request.get('url', '')
        parsed_url = urlparse(url)

        # Parse query parameters
        query_params = parse_qsl(parsed_url.query)

        # Parse headers
        headers = request.get('headers', {})

        # Parse cookies
        cookies = {}
        if 'Cookie' in headers:
            cookie_str = headers['Cookie']
            for cookie in cookie_str.split(';'):
                if '=' in cookie:
                    name, value = cookie.strip().split('=', 1)
                    cookies[name] = value

        # Parse body
        body = request.get('data', '')
        body_parsed = None
        content_type = headers.get('Content-Type', '').lower()

        if content_type.startswith('application/json'):
            try:
                body_parsed = json.loads(body) if body else None
            except Exception as e:
                logger.warning(f"Failed to parse JSON body: {e}")
        elif content_type.startswith('application/x-www-form-urlencoded'):
            try:
                body_parsed = dict(parse_qsl(body))
            except Exception as e:
                logger.warning(f"Failed to parse form data: {e}")
        elif content_type.startswith('multipart/form-data'):
            body_parsed = "<multipart form data>"

        # Create inspection result
        inspection = {
            'id': request_id,
            'timestamp': time.time(),
            'method': request.get('method', 'GET'),
            'url': url,
            'scheme': parsed_url.scheme,
            'host': parsed_url.netloc,
            'path': parsed_url.path,
            'query_string': parsed_url.query,
            'query_params': query_params,
            'headers': headers,
            'cookies': cookies,
            'body': body,
            'body_parsed': body_parsed,
            'size': len(body) if body else 0,
            'content_type': content_type
        }

        # Store inspection
        self.requests[request_id] = {
            'request': inspection,
            'response': None
        }

        # Limit the number of stored requests
        if len(self.requests) > self.max_requests:
            oldest_id = min(self.requests.keys(), key=lambda k: self.requests[k]['request']['timestamp'])
            del self.requests[oldest_id]

        return inspection

    def inspect_response(self, response: Dict[str, Any], request_id: Optional[str] = None) -> Dict[str, Any]:
        """Inspect a response"""
        # Generate response ID if not provided
        if not request_id:
            request_id = str(uuid.uuid4())

        # Parse headers
        headers = response.get('headers', {})

        # Parse cookies
        cookies = {}
        if 'Set-Cookie' in headers:
            cookie_str = headers['Set-Cookie']
            for cookie in cookie_str.split(';'):
                if '=' in cookie:
                    name, value = cookie.strip().split('=', 1)
                    cookies[name] = value

        # Parse body
        body = response.get('content', '')
        body_parsed = None
        content_type = headers.get('Content-Type', '').lower()

        if content_type.startswith('application/json'):
            try:
                body_parsed = json.loads(body) if body else None
            except Exception as e:
                logger.warning(f"Failed to parse JSON body: {e}")
        elif content_type.startswith('text/html'):
            body_parsed = "<html content>"
        elif content_type.startswith('text/xml') or content_type.startswith('application/xml'):
            body_parsed = "<xml content>"

        # Create inspection result
        inspection = {
            'id': request_id,
            'timestamp': time.time(),
            'status_code': response.get('status_code', 200),
            'headers': headers,
            'cookies': cookies,
            'body': body,
            'body_parsed': body_parsed,
            'size': len(body) if body else 0,
            'content_type': content_type,
            'time': response.get('time', 0)
        }

        # Store inspection
        if request_id in self.requests:
            self.requests[request_id]['response'] = inspection
        else:
            self.requests[request_id] = {
                'request': None,
                'response': inspection
            }

        return inspection

    def get_request(self, request_id: str) -> Optional[Dict[str, Any]]:
        """Get request inspection"""
        if request_id not in self.requests:
            return None

        return self.requests[request_id]['request']

    def get_response(self, request_id: str) -> Optional[Dict[str, Any]]:
        """Get response inspection"""
        if request_id not in self.requests:
            return None

        return self.requests[request_id]['response']

    def get_request_response(self, request_id: str) -> Optional[Dict[str, Any]]:
        """Get request and response inspection"""
        if request_id not in self.requests:
            return None

        return self.requests[request_id]

    def get_all_requests(self) -> List[Dict[str, Any]]:
        """Get all request inspections"""
        result = []
        for request_id, data in self.requests.items():
            if data['request']:
                result.append(data['request'])

        # Sort by timestamp (newest first)
        result.sort(key=lambda x: x['timestamp'], reverse=True)

        return result

    def get_all_responses(self) -> List[Dict[str, Any]]:
        """Get all response inspections"""
        result = []
        for request_id, data in self.requests.items():
            if data['response']:
                result.append(data['response'])

        # Sort by timestamp (newest first)
        result.sort(key=lambda x: x['timestamp'], reverse=True)

        return result

    def get_all_request_responses(self) -> List[Dict[str, Any]]:
        """Get all request and response inspections"""
        result = []
        for request_id, data in self.requests.items():
            result.append({
                'id': request_id,
                'request': data['request'],
                'response': data['response']
            })

        # Sort by timestamp (newest first)
        result.sort(key=lambda x: x['request']['timestamp'] if x['request'] else (x['response']['timestamp'] if x['response'] else 0), reverse=True)

        return result

    def clear_all(self):
        """Clear all inspections"""
        self.requests = {}

    def delete_request(self, request_id: str) -> bool:
        """Delete a request inspection"""
        if request_id not in self.requests:
            return False

        del self.requests[request_id]
        return True

    def modify_request(self, request_id: str, modifications: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        """Modify a request for resending"""
        if request_id not in self.requests or not self.requests[request_id]['request']:
            return None

        # Get original request
        original = self.requests[request_id]['request']

        # Create a copy
        modified = dict(original)

        # Apply modifications
        if 'method' in modifications:
            modified['method'] = modifications['method']

        if 'url' in modifications:
            modified['url'] = modifications['url']
            # Update parsed URL components
            parsed_url = urlparse(modifications['url'])
            modified['scheme'] = parsed_url.scheme
            modified['host'] = parsed_url.netloc
            modified['path'] = parsed_url.path
            modified['query_string'] = parsed_url.query
            modified['query_params'] = parse_qsl(parsed_url.query)

        if 'query_params' in modifications:
            # Update query parameters
            query_params = modifications['query_params']
            modified['query_params'] = query_params

            # Rebuild URL
            parsed_url = urlparse(modified['url'])
            new_query = urlencode(query_params)
            modified['query_string'] = new_query
            modified['url'] = urlunparse((
                parsed_url.scheme,
                parsed_url.netloc,
                parsed_url.path,
                parsed_url.params,
                new_query,
                parsed_url.fragment
            ))

        if 'headers' in modifications:
            modified['headers'] = modifications['headers']

        if 'cookies' in modifications:
            modified['cookies'] = modifications['cookies']

            # Update Cookie header
            cookie_str = '; '.join([f"{name}={value}" for name, value in modifications['cookies'].items()])
            if cookie_str:
                modified['headers']['Cookie'] = cookie_str
            elif 'Cookie' in modified['headers']:
                del modified['headers']['Cookie']

        if 'body' in modifications:
            modified['body'] = modifications['body']
            modified['size'] = len(modifications['body']) if modifications['body'] else 0

            # Update Content-Length header
            if modified['size'] > 0:
                modified['headers']['Content-Length'] = str(modified['size'])
            elif 'Content-Length' in modified['headers']:
                del modified['headers']['Content-Length']

        return modified

    def resend_request(self, request_id: str, modifications: Optional[Dict[str, Any]] = None) -> Optional[Dict[str, Any]]:
        """Resend a request with optional modifications"""
        # Get modified request
        if modifications:
            request = self.modify_request(request_id, modifications)
        else:
            request = self.get_request(request_id)

        if not request:
            return None

        # Convert to PySpider request format
        pyspider_request = {
            'url': request['url'],
            'method': request['method'],
            'headers': request['headers'],
            'data': request['body']
        }

        # Inspect the new request
        new_request = self.inspect_request(pyspider_request)

        return new_request

    def set_filter(self, filter_name: str, filter_value: Any) -> bool:
        """Set a filter for requests and responses"""
        if filter_name not in self.filters:
            return False

        self.filters[filter_name] = filter_value
        return True

    def clear_filter(self, filter_name: str = None) -> bool:
        """Clear a filter or all filters"""
        if filter_name is None:
            # Clear all filters
            for key in self.filters:
                self.filters[key] = None
            return True

        if filter_name not in self.filters:
            return False

        self.filters[filter_name] = None
        return True

    def get_filtered_requests(self) -> List[Dict[str, Any]]:
        """Get filtered request inspections"""
        result = []

        for request_id, data in self.requests.items():
            if not data['request']:
                continue

            request = data['request']

            # Apply filters
            if self._apply_request_filters(request):
                result.append(request)

        # Sort by timestamp (newest first)
        result.sort(key=lambda x: x['timestamp'], reverse=True)

        return result

    def get_filtered_responses(self) -> List[Dict[str, Any]]:
        """Get filtered response inspections"""
        result = []

        for request_id, data in self.requests.items():
            if not data['response']:
                continue

            response = data['response']

            # Apply filters
            if self._apply_response_filters(response):
                result.append(response)

        # Sort by timestamp (newest first)
        result.sort(key=lambda x: x['timestamp'], reverse=True)

        return result

    def _apply_request_filters(self, request: Dict[str, Any]) -> bool:
        """Apply filters to a request"""
        # Method filter
        if self.filters['method'] and request['method'] != self.filters['method']:
            return False

        # Host filter
        if self.filters['host'] and self.filters['host'] not in request['host']:
            return False

        # Path filter
        if self.filters['path'] and self.filters['path'] not in request['path']:
            return False

        # Content type filter
        if self.filters['content_type'] and self.filters['content_type'] not in request['content_type']:
            return False

        # Size filters
        if self.filters['min_size'] is not None and request['size'] < self.filters['min_size']:
            return False

        if self.filters['max_size'] is not None and request['size'] > self.filters['max_size']:
            return False

        # Search text filter
        if self.filters['search_text']:
            search_text = self.filters['search_text'].lower()
            # Search in URL
            if search_text in request['url'].lower():
                return True

            # Search in headers
            for name, value in request['headers'].items():
                if search_text in name.lower() or search_text in str(value).lower():
                    return True

            # Search in body
            if request['body'] and search_text in str(request['body']).lower():
                return True

            # If we got here, the search text wasn't found
            return False

        return True

    def _apply_response_filters(self, response: Dict[str, Any]) -> bool:
        """Apply filters to a response"""
        # Status code filter
        if self.filters['status_code'] and response['status_code'] != self.filters['status_code']:
            return False

        # Content type filter
        if self.filters['content_type'] and self.filters['content_type'] not in response['content_type']:
            return False

        # Size filters
        if self.filters['min_size'] is not None and response['size'] < self.filters['min_size']:
            return False

        if self.filters['max_size'] is not None and response['size'] > self.filters['max_size']:
            return False

        # Search text filter
        if self.filters['search_text']:
            search_text = self.filters['search_text'].lower()
            # Search in headers
            for name, value in response['headers'].items():
                if search_text in name.lower() or search_text in str(value).lower():
                    return True

            # Search in body
            if response['body'] and search_text in str(response['body']).lower():
                return True

            # If we got here, the search text wasn't found
            return False

        return True

    def add_request_hook(self, hook: callable) -> int:
        """Add a hook to be called for each request"""
        self.request_hooks.append(hook)
        return len(self.request_hooks) - 1

    def add_response_hook(self, hook: callable) -> int:
        """Add a hook to be called for each response"""
        self.response_hooks.append(hook)
        return len(self.response_hooks) - 1

    def remove_request_hook(self, hook_id: int) -> bool:
        """Remove a request hook"""
        if hook_id < 0 or hook_id >= len(self.request_hooks):
            return False

        self.request_hooks.pop(hook_id)
        return True

    def remove_response_hook(self, hook_id: int) -> bool:
        """Remove a response hook"""
        if hook_id < 0 or hook_id >= len(self.response_hooks):
            return False

        self.response_hooks.pop(hook_id)
        return True

    def inspect_websocket_message(self, message: Dict[str, Any]) -> Dict[str, Any]:
        """Inspect a WebSocket message"""
        # Generate message ID
        message_id = str(uuid.uuid4())

        # Create inspection result
        inspection = {
            'id': message_id,
            'timestamp': time.time(),
            'direction': message.get('direction', 'unknown'),  # 'sent' or 'received'
            'connection_id': message.get('connection_id', ''),
            'data': message.get('data', ''),
            'size': len(message.get('data', ''))
        }

        # Parse data if it's JSON
        try:
            if isinstance(inspection['data'], str):
                inspection['data_parsed'] = json.loads(inspection['data'])
                inspection['is_json'] = True
            else:
                inspection['data_parsed'] = None
                inspection['is_json'] = False
        except Exception:
            inspection['data_parsed'] = None
            inspection['is_json'] = False

        # Store inspection
        self.websocket_messages[message_id] = inspection

        # Limit the number of stored messages
        if len(self.websocket_messages) > self.max_websocket_messages:
            oldest_id = min(self.websocket_messages.keys(), key=lambda k: self.websocket_messages[k]['timestamp'])
            del self.websocket_messages[oldest_id]

        return inspection

    def get_websocket_message(self, message_id: str) -> Optional[Dict[str, Any]]:
        """Get WebSocket message inspection"""
        if message_id not in self.websocket_messages:
            return None

        return self.websocket_messages[message_id]

    def get_all_websocket_messages(self) -> List[Dict[str, Any]]:
        """Get all WebSocket message inspections"""
        result = list(self.websocket_messages.values())

        # Sort by timestamp (newest first)
        result.sort(key=lambda x: x['timestamp'], reverse=True)

        return result

    def clear_websocket_messages(self):
        """Clear all WebSocket message inspections"""
        self.websocket_messages = {}

    def save_to_har(self, filename: str) -> bool:
        """Save requests and responses to HAR format"""
        try:
            entries = []

            for request_id, data in self.requests.items():
                if not data['request']:
                    continue

                request = data['request']
                response = data['response']

                # Create entry
                entry = {
                    'startedDateTime': time.strftime('%Y-%m-%dT%H:%M:%S.%fZ', time.gmtime(request['timestamp'])),
                    'time': response['time'] if response else 0,
                    'request': {
                        'method': request['method'],
                        'url': request['url'],
                        'httpVersion': 'HTTP/1.1',
                        'cookies': [
                            {'name': name, 'value': value}
                            for name, value in request['cookies'].items()
                        ],
                        'headers': [
                            {'name': name, 'value': value}
                            for name, value in request['headers'].items()
                        ],
                        'queryString': [
                            {'name': name, 'value': value}
                            for name, value in request['query_params']
                        ],
                        'postData': {
                            'mimeType': request['content_type'],
                            'text': request['body']
                        } if request['body'] else None,
                        'headersSize': -1,
                        'bodySize': request['size']
                    },
                    'response': {
                        'status': response['status_code'] if response else 0,
                        'statusText': '',
                        'httpVersion': 'HTTP/1.1',
                        'cookies': [
                            {'name': name, 'value': value}
                            for name, value in (response['cookies'].items() if response else {})
                        ],
                        'headers': [
                            {'name': name, 'value': value}
                            for name, value in (response['headers'].items() if response else {})
                        ],
                        'content': {
                            'size': response['size'] if response else 0,
                            'mimeType': response['content_type'] if response else '',
                            'text': response['body'] if response else ''
                        },
                        'redirectURL': '',
                        'headersSize': -1,
                        'bodySize': response['size'] if response else 0
                    } if response else None,
                    'cache': {},
                    'timings': {
                        'send': 0,
                        'wait': response['time'] if response else 0,
                        'receive': 0
                    }
                }

                entries.append(entry)

            # Create HAR object
            har = {
                'log': {
                    'version': '1.2',
                    'creator': {
                        'name': 'PySpider Request Inspector',
                        'version': '1.0'
                    },
                    'pages': [],
                    'entries': entries
                }
            }

            # Write to file
            with open(filename, 'w') as f:
                json.dump(har, f, indent=2)

            return True
        except Exception as e:
            logger.error(f"Error saving to HAR: {e}")
            return False

    def compare_requests(self, request_id1: str, request_id2: str) -> Dict[str, Any]:
        """Compare two requests"""
        request1 = self.get_request(request_id1)
        request2 = self.get_request(request_id2)

        if not request1 or not request2:
            return {'error': 'One or both requests not found'}

        # Compare URL
        url_diff = request1['url'] != request2['url']

        # Compare method
        method_diff = request1['method'] != request2['method']

        # Compare headers
        headers_diff = {}
        all_headers = set(request1['headers'].keys()) | set(request2['headers'].keys())
        for header in all_headers:
            if header not in request1['headers']:
                headers_diff[header] = {'only_in': 'request2', 'value': request2['headers'][header]}
            elif header not in request2['headers']:
                headers_diff[header] = {'only_in': 'request1', 'value': request1['headers'][header]}
            elif request1['headers'][header] != request2['headers'][header]:
                headers_diff[header] = {
                    'request1': request1['headers'][header],
                    'request2': request2['headers'][header]
                }

        # Compare cookies
        cookies_diff = {}
        all_cookies = set(request1['cookies'].keys()) | set(request2['cookies'].keys())
        for cookie in all_cookies:
            if cookie not in request1['cookies']:
                cookies_diff[cookie] = {'only_in': 'request2', 'value': request2['cookies'][cookie]}
            elif cookie not in request2['cookies']:
                cookies_diff[cookie] = {'only_in': 'request1', 'value': request1['cookies'][cookie]}
            elif request1['cookies'][cookie] != request2['cookies'][cookie]:
                cookies_diff[cookie] = {
                    'request1': request1['cookies'][cookie],
                    'request2': request2['cookies'][cookie]
                }

        # Compare query parameters
        query_diff = {}
        query1 = dict(request1['query_params'])
        query2 = dict(request2['query_params'])
        all_params = set(query1.keys()) | set(query2.keys())
        for param in all_params:
            if param not in query1:
                query_diff[param] = {'only_in': 'request2', 'value': query2[param]}
            elif param not in query2:
                query_diff[param] = {'only_in': 'request1', 'value': query1[param]}
            elif query1[param] != query2[param]:
                query_diff[param] = {
                    'request1': query1[param],
                    'request2': query2[param]
                }

        # Compare body
        body_diff = request1['body'] != request2['body']

        return {
            'url_diff': url_diff,
            'method_diff': method_diff,
            'headers_diff': headers_diff,
            'cookies_diff': cookies_diff,
            'query_diff': query_diff,
            'body_diff': body_diff,
            'request1': request1,
            'request2': request2
        }
