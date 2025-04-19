#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
# Author: Binux<i@binux.me>
#         http://binux.me
# Created on 2024-04-28 10:00:00

import json
import time
import logging
import asyncio
import re
import base64
from typing import Dict, List, Any, Optional, Union, Tuple, Callable
from playwright.async_api import Page, Locator, ElementHandle, Response

logger = logging.getLogger('playwright_actions')

class PlaywrightActions:
    """
    Class for simulating user actions with Playwright
    """

    def __init__(self, page=None):
        """
        Initialize with a Playwright page

        Args:
            page: Playwright page object
        """
        self.page = page
        self._recorded_actions = []
        self._current_action_index = 0
        self._action_history = []
        self._retry_count = 3
        self._retry_delay = 1000  # ms
        self._parallel_actions = False
        self._conditional_actions = {}
        self._performance_metrics = {}
        self._resource_usage = {}
        self._last_action_time = time.time()

    async def perform_action(self, action: Dict[str, Any]) -> Dict[str, Any]:
        """
        Perform a single action

        Args:
            action: Action configuration
                {
                    'type': 'click',
                    'selector': '#submit-button',
                    'options': {'force': true}
                }

        Returns:
            Result of the action
        """
        if not self.page:
            return {'success': False, 'error': 'Page not initialized'}

        action_type = action.get('type')
        result = {'type': action_type, 'success': False}

        try:
            if action_type == 'click':
                await self._perform_click(action, result)
            elif action_type == 'fill':
                await self._perform_fill(action, result)
            elif action_type == 'select':
                await self._perform_select(action, result)
            elif action_type == 'check':
                await self._perform_check(action, result)
            elif action_type == 'uncheck':
                await self._perform_uncheck(action, result)
            elif action_type == 'hover':
                await self._perform_hover(action, result)
            elif action_type == 'press':
                await self._perform_press(action, result)
            elif action_type == 'scroll':
                await self._perform_scroll(action, result)
            elif action_type == 'screenshot':
                await self._perform_screenshot(action, result)
            elif action_type == 'wait_for_selector':
                await self._perform_wait_for_selector(action, result)
            elif action_type == 'wait_for_navigation':
                await self._perform_wait_for_navigation(action, result)
            elif action_type == 'wait_for_load_state':
                await self._perform_wait_for_load_state(action, result)
            elif action_type == 'wait_for_timeout':
                await self._perform_wait_for_timeout(action, result)
            elif action_type == 'evaluate':
                await self._perform_evaluate(action, result)
            elif action_type == 'goto':
                await self._perform_goto(action, result)
            elif action_type == 'reload':
                await self._perform_reload(action, result)
            elif action_type == 'back':
                await self._perform_back(action, result)
            elif action_type == 'forward':
                await self._perform_forward(action, result)
            elif action_type == 'drag_and_drop':
                await self._perform_drag_and_drop(action, result)
            elif action_type == 'type':
                await self._perform_type(action, result)
            elif action_type == 'focus':
                await self._perform_focus(action, result)
            elif action_type == 'blur':
                await self._perform_blur(action, result)
            elif action_type == 'keyboard_shortcut':
                await self._perform_keyboard_shortcut(action, result)
            elif action_type == 'file_upload':
                await self._perform_file_upload(action, result)
            elif action_type == 'if':
                await self._perform_conditional(action, result)
            elif action_type == 'parallel':
                await self._perform_parallel(action, result)
            elif action_type == 'retry':
                await self._perform_retry(action, result)
            elif action_type == 'wait_for_function':
                await self._perform_wait_for_function(action, result)
            elif action_type == 'intercept_request':
                await self._perform_intercept_request(action, result)
            elif action_type == 'intercept_response':
                await self._perform_intercept_response(action, result)
            else:
                result['error'] = f"Unknown action type: {action_type}"
                return result

            result['success'] = True
            return result
        except Exception as e:
            result['error'] = str(e)
            logger.error(f"Error performing action {action_type}: {e}")
            return result

    async def perform_actions(self, actions: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """
        Perform a sequence of actions

        Args:
            actions: List of action configurations

        Returns:
            List of action results
        """
        results = []

        for action in actions:
            result = await self.perform_action(action)
            results.append(result)

            # Stop on error unless continue_on_error is True
            if not result['success'] and not action.get('continue_on_error', False):
                break

        return results

    async def _perform_click(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform click action"""
        selector = action.get('selector')
        if not selector:
            result['error'] = "Selector is required for click action"
            return

        options = action.get('options', {})
        await self.page.click(selector, **options)
        result['selector'] = selector

    async def _perform_fill(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform fill action"""
        selector = action.get('selector')
        value = action.get('value', '')

        if not selector:
            result['error'] = "Selector is required for fill action"
            return

        options = action.get('options', {})
        await self.page.fill(selector, value, **options)
        result['selector'] = selector
        result['value'] = value

    async def _perform_select(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform select action"""
        selector = action.get('selector')
        value = action.get('value')

        if not selector:
            result['error'] = "Selector is required for select action"
            return

        if not value:
            result['error'] = "Value is required for select action"
            return

        options = action.get('options', {})

        # Handle different value types
        if isinstance(value, list):
            await self.page.select_option(selector, value=value, **options)
        else:
            await self.page.select_option(selector, value=[value], **options)

        result['selector'] = selector
        result['value'] = value

    async def _perform_check(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform check action"""
        selector = action.get('selector')
        if not selector:
            result['error'] = "Selector is required for check action"
            return

        options = action.get('options', {})
        await self.page.check(selector, **options)
        result['selector'] = selector

    async def _perform_uncheck(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform uncheck action"""
        selector = action.get('selector')
        if not selector:
            result['error'] = "Selector is required for uncheck action"
            return

        options = action.get('options', {})
        await self.page.uncheck(selector, **options)
        result['selector'] = selector

    async def _perform_hover(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform hover action"""
        selector = action.get('selector')
        if not selector:
            result['error'] = "Selector is required for hover action"
            return

        options = action.get('options', {})
        await self.page.hover(selector, **options)
        result['selector'] = selector

    async def _perform_press(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform press action"""
        selector = action.get('selector')
        key = action.get('key')

        if not selector:
            result['error'] = "Selector is required for press action"
            return

        if not key:
            result['error'] = "Key is required for press action"
            return

        options = action.get('options', {})
        await self.page.press(selector, key, **options)
        result['selector'] = selector
        result['key'] = key

    async def _perform_scroll(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform scroll action"""
        selector = action.get('selector')

        if selector:
            # Scroll element into view
            options = action.get('options', {})
            await self.page.scroll_into_view_if_needed(selector, **options)
            result['selector'] = selector
        else:
            # Scroll window
            x = action.get('x', 0)
            y = action.get('y', 0)

            await self.page.evaluate(f"window.scrollTo({x}, {y})")
            result['x'] = x
            result['y'] = y

    async def _perform_screenshot(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform screenshot action"""
        path = action.get('path')
        selector = action.get('selector')

        options = action.get('options', {})

        if selector:
            # Screenshot of element
            screenshot = await self.page.locator(selector).screenshot(path=path, **options)
            result['selector'] = selector
        else:
            # Screenshot of page
            screenshot = await self.page.screenshot(path=path, **options)

        if path:
            result['path'] = path
        else:
            # Return base64 encoded screenshot
            import base64
            result['data'] = base64.b64encode(screenshot).decode('utf-8')

    async def _perform_wait_for_selector(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform wait for selector action"""
        selector = action.get('selector')
        if not selector:
            result['error'] = "Selector is required for wait_for_selector action"
            return

        options = action.get('options', {})
        await self.page.wait_for_selector(selector, **options)
        result['selector'] = selector

    async def _perform_wait_for_navigation(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform wait for navigation action"""
        options = action.get('options', {})
        await self.page.wait_for_navigation(**options)

    async def _perform_wait_for_load_state(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform wait for load state action"""
        state = action.get('state', 'load')
        options = action.get('options', {})
        await self.page.wait_for_load_state(state, **options)
        result['state'] = state

    async def _perform_wait_for_timeout(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform wait for timeout action"""
        timeout = action.get('timeout', 1000)
        await self.page.wait_for_timeout(timeout)
        result['timeout'] = timeout

    async def _perform_evaluate(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform evaluate action"""
        expression = action.get('expression')
        if not expression:
            result['error'] = "Expression is required for evaluate action"
            return

        arg = action.get('arg')

        if arg is not None:
            eval_result = await self.page.evaluate(expression, arg)
        else:
            eval_result = await self.page.evaluate(expression)

        result['expression'] = expression
        result['eval_result'] = eval_result

    async def _perform_goto(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform goto action"""
        url = action.get('url')
        if not url:
            result['error'] = "URL is required for goto action"
            return

        options = action.get('options', {})
        response = await self.page.goto(url, **options)
        result['url'] = url

        if response:
            result['status'] = response.status

    async def _perform_reload(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform reload action"""
        options = action.get('options', {})
        response = await self.page.reload(**options)

        if response:
            result['status'] = response.status

    async def _perform_back(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform back action"""
        options = action.get('options', {})
        response = await self.page.go_back(**options)

        if response:
            result['status'] = response.status

    async def _perform_forward(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform forward action"""
        options = action.get('options', {})
        response = await self.page.go_forward(**options)

        if response:
            result['status'] = response.status

    async def start_recording(self):
        """Start recording user actions"""
        self._recorded_actions = []

        # Add event listeners to record actions
        await self.page.evaluate("""() => {
            window.__recordedActions = [];

            // Record clicks
            document.addEventListener('click', (event) => {
                const target = event.target;
                const selector = getSelector(target);
                if (selector) {
                    window.__recordedActions.push({
                        type: 'click',
                        selector: selector,
                        timestamp: Date.now()
                    });
                }
            }, true);

            // Record inputs
            document.addEventListener('change', (event) => {
                const target = event.target;
                const selector = getSelector(target);
                if (selector) {
                    if (target.tagName === 'INPUT') {
                        if (target.type === 'checkbox' || target.type === 'radio') {
                            window.__recordedActions.push({
                                type: target.checked ? 'check' : 'uncheck',
                                selector: selector,
                                timestamp: Date.now()
                            });
                        } else {
                            window.__recordedActions.push({
                                type: 'fill',
                                selector: selector,
                                value: target.value,
                                timestamp: Date.now()
                            });
                        }
                    } else if (target.tagName === 'SELECT') {
                        const values = Array.from(target.selectedOptions).map(option => option.value);
                        window.__recordedActions.push({
                            type: 'select',
                            selector: selector,
                            value: values.length === 1 ? values[0] : values,
                            timestamp: Date.now()
                        });
                    } else if (target.tagName === 'TEXTAREA') {
                        window.__recordedActions.push({
                            type: 'fill',
                            selector: selector,
                            value: target.value,
                            timestamp: Date.now()
                        });
                    }
                }
            }, true);

            // Helper function to get a unique selector for an element
            function getSelector(element) {
                // Try ID
                if (element.id) {
                    return '#' + element.id;
                }

                // Try data-testid
                if (element.dataset.testid) {
                    return `[data-testid="${element.dataset.testid}"]`;
                }

                // Try classes
                if (element.className && typeof element.className === 'string') {
                    const classes = element.className.trim().split(/\\s+/);
                    if (classes.length > 0) {
                        const selector = '.' + classes.join('.');
                        // Check if this selector is unique
                        if (document.querySelectorAll(selector).length === 1) {
                            return selector;
                        }
                    }
                }

                // Try tag name with nth-child
                const parent = element.parentNode;
                if (parent) {
                    const children = Array.from(parent.children);
                    const index = children.indexOf(element);
                    if (index !== -1) {
                        const tagName = element.tagName.toLowerCase();
                        return `${getSelector(parent)} > ${tagName}:nth-child(${index + 1})`;
                    }
                }

                // Fallback to a complex selector
                const tagName = element.tagName.toLowerCase();
                return tagName;
            }
        }""")

    async def stop_recording(self) -> List[Dict[str, Any]]:
        """
        Stop recording user actions and return the recorded actions

        Returns:
            List of recorded actions
        """
        # Get recorded actions from the page
        recorded_actions = await self.page.evaluate("window.__recordedActions || []")
        self._recorded_actions = recorded_actions

        # Clear recorded actions in the page
        await self.page.evaluate("window.__recordedActions = []")

        return self._recorded_actions

    async def replay_recorded_actions(self, delay: int = 500) -> List[Dict[str, Any]]:
        """
        Replay recorded actions

        Args:
            delay: Delay between actions in milliseconds

        Returns:
            List of action results
        """
        results = []

        for action in self._recorded_actions:
            # Wait for delay
            await self.page.wait_for_timeout(delay)

            # Perform action
            result = await self.perform_action(action)
            results.append(result)

            # Stop on error
            if not result['success']:
                break

        return results

    def save_recorded_actions(self, path: str) -> bool:
        """
        Save recorded actions to a file

        Args:
            path: Path to save the actions

        Returns:
            True if successful, False otherwise
        """
        try:
            with open(path, 'w') as f:
                json.dump(self._recorded_actions, f, indent=2)
            return True
        except Exception as e:
            logger.error(f"Error saving recorded actions: {e}")
            return False

    def load_recorded_actions(self, path: str) -> bool:
        """
        Load recorded actions from a file

        Args:
            path: Path to load the actions from

        Returns:
            True if successful, False otherwise
        """
        try:
            with open(path, 'r') as f:
                self._recorded_actions = json.load(f)
            return True
        except Exception as e:
            logger.error(f"Error loading recorded actions: {e}")
            return False

    async def _perform_drag_and_drop(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform drag and drop action"""
        source = action.get('source')
        target = action.get('target')

        if not source:
            result['error'] = "Source selector is required for drag_and_drop action"
            return

        if not target:
            result['error'] = "Target selector is required for drag_and_drop action"
            return

        options = action.get('options', {})
        force = options.get('force', False)

        # Get source and target elements
        source_element = await self.page.query_selector(source)
        target_element = await self.page.query_selector(target)

        if not source_element:
            result['error'] = f"Source element not found: {source}"
            return

        if not target_element:
            result['error'] = f"Target element not found: {target}"
            return

        # Get source and target bounding boxes
        source_box = await source_element.bounding_box()
        target_box = await target_element.bounding_box()

        if not source_box or not target_box:
            result['error'] = "Could not get element bounding boxes"
            return

        # Calculate source and target center points
        source_x = source_box['x'] + source_box['width'] / 2
        source_y = source_box['y'] + source_box['height'] / 2
        target_x = target_box['x'] + target_box['width'] / 2
        target_y = target_box['y'] + target_box['height'] / 2

        # Perform drag and drop
        await self.page.mouse.move(source_x, source_y)
        await self.page.mouse.down()
        await self.page.mouse.move(target_x, target_y, steps=10)  # Move in steps for smoother drag
        await self.page.mouse.up()

        result['source'] = source
        result['target'] = target

    async def _perform_type(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform type action (slower typing with delays between keystrokes)"""
        selector = action.get('selector')
        text = action.get('text')
        delay = action.get('delay', 100)  # Default delay between keystrokes in ms

        if not selector:
            result['error'] = "Selector is required for type action"
            return

        if text is None:
            result['error'] = "Text is required for type action"
            return

        # Click on the element first to focus it
        await self.page.click(selector)

        # Type text with delay between keystrokes
        for char in text:
            await self.page.keyboard.type(char)
            await self.page.wait_for_timeout(delay)

        result['selector'] = selector
        result['text'] = text

    async def _perform_focus(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform focus action"""
        selector = action.get('selector')

        if not selector:
            result['error'] = "Selector is required for focus action"
            return

        await self.page.focus(selector)
        result['selector'] = selector

    async def _perform_blur(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform blur action"""
        selector = action.get('selector')

        if not selector:
            result['error'] = "Selector is required for blur action"
            return

        # Focus the element first, then press Tab to blur it
        await self.page.focus(selector)
        await self.page.keyboard.press('Tab')
        result['selector'] = selector

    async def _perform_keyboard_shortcut(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform keyboard shortcut action"""
        keys = action.get('keys')

        if not keys:
            result['error'] = "Keys are required for keyboard_shortcut action"
            return

        # Handle array of keys or single key
        if isinstance(keys, list):
            # Press all keys down
            for key in keys:
                await self.page.keyboard.down(key)

            # Release all keys in reverse order
            for key in reversed(keys):
                await self.page.keyboard.up(key)
        else:
            # Single key or combination like "Control+C"
            key_parts = keys.split('+')

            # Press all keys down
            for key in key_parts:
                await self.page.keyboard.down(key)

            # Release all keys in reverse order
            for key in reversed(key_parts):
                await self.page.keyboard.up(key)

        result['keys'] = keys

    async def _perform_file_upload(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform file upload action"""
        selector = action.get('selector')
        files = action.get('files')

        if not selector:
            result['error'] = "Selector is required for file_upload action"
            return

        if not files:
            result['error'] = "Files are required for file_upload action"
            return

        # Handle single file or multiple files
        if isinstance(files, str):
            files = [files]

        await self.page.set_input_files(selector, files)
        result['selector'] = selector
        result['files'] = files

    async def _perform_conditional(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform conditional action"""
        condition = action.get('condition')
        then_actions = action.get('then')
        else_actions = action.get('else')

        if not condition:
            result['error'] = "Condition is required for if action"
            return

        # Evaluate condition
        condition_met = False

        if isinstance(condition, dict):
            # Handle different condition types
            condition_type = condition.get('type')

            if condition_type == 'selector_exists':
                selector = condition.get('selector')
                if not selector:
                    result['error'] = "Selector is required for selector_exists condition"
                    return

                element = await self.page.query_selector(selector)
                condition_met = element is not None

            elif condition_type == 'selector_visible':
                selector = condition.get('selector')
                if not selector:
                    result['error'] = "Selector is required for selector_visible condition"
                    return

                visible = await self.page.is_visible(selector)
                condition_met = visible

            elif condition_type == 'js_expression':
                expression = condition.get('expression')
                if not expression:
                    result['error'] = "Expression is required for js_expression condition"
                    return

                condition_met = await self.page.evaluate(expression)

            elif condition_type == 'url_matches':
                pattern = condition.get('pattern')
                if not pattern:
                    result['error'] = "Pattern is required for url_matches condition"
                    return

                current_url = self.page.url
                condition_met = re.search(pattern, current_url) is not None

            else:
                result['error'] = f"Unknown condition type: {condition_type}"
                return

        elif isinstance(condition, str):
            # Treat as JavaScript expression
            condition_met = await self.page.evaluate(condition)

        # Execute actions based on condition result
        if condition_met and then_actions:
            then_results = await self.perform_actions(then_actions)
            result['condition_result'] = True
            result['then_results'] = then_results
        elif not condition_met and else_actions:
            else_results = await self.perform_actions(else_actions)
            result['condition_result'] = False
            result['else_results'] = else_results
        else:
            result['condition_result'] = condition_met

    async def _perform_parallel(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform parallel actions"""
        actions = action.get('actions')

        if not actions or not isinstance(actions, list):
            result['error'] = "Actions array is required for parallel action"
            return

        # Create tasks for all actions
        tasks = []
        for parallel_action in actions:
            task = asyncio.create_task(self.perform_action(parallel_action))
            tasks.append(task)

        # Wait for all tasks to complete
        parallel_results = await asyncio.gather(*tasks, return_exceptions=True)

        # Process results
        processed_results = []
        for i, parallel_result in enumerate(parallel_results):
            if isinstance(parallel_result, Exception):
                processed_results.append({
                    'success': False,
                    'error': str(parallel_result),
                    'action': actions[i]
                })
            else:
                processed_results.append(parallel_result)

        result['parallel_results'] = processed_results

    async def _perform_retry(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform retry action"""
        retry_action = action.get('action')
        max_retries = action.get('max_retries', self._retry_count)
        delay = action.get('delay', self._retry_delay)

        if not retry_action:
            result['error'] = "Action is required for retry action"
            return

        # Try to perform the action with retries
        retry_results = []
        success = False

        for attempt in range(max_retries):
            retry_result = await self.perform_action(retry_action)
            retry_results.append(retry_result)

            if retry_result.get('success', False):
                success = True
                break

            # Wait before retrying
            if attempt < max_retries - 1:
                await self.page.wait_for_timeout(delay)

        result['success'] = success
        result['attempts'] = len(retry_results)
        result['retry_results'] = retry_results

    async def _perform_wait_for_function(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform wait for function action"""
        expression = action.get('expression')
        polling = action.get('polling', 100)  # Default polling interval in ms
        timeout = action.get('timeout', 30000)  # Default timeout in ms

        if not expression:
            result['error'] = "Expression is required for wait_for_function action"
            return

        try:
            await self.page.wait_for_function(expression, polling=polling, timeout=timeout)
            result['expression'] = expression
        except Exception as e:
            result['error'] = f"Wait for function timed out: {str(e)}"
            return

    async def _perform_intercept_request(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform intercept request action"""
        url_pattern = action.get('url_pattern')
        handler_type = action.get('handler_type', 'abort')  # abort, continue, or fulfill
        resource_type = action.get('resource_type')  # Optional resource type filter

        if not url_pattern:
            result['error'] = "URL pattern is required for intercept_request action"
            return

        # Create route handler
        async def route_handler(route):
            request = route.request

            # Check resource type if specified
            if resource_type and request.resource_type != resource_type:
                await route.continue_()
                return

            if handler_type == 'abort':
                await route.abort()
            elif handler_type == 'fulfill':
                fulfill_options = action.get('fulfill_options', {})
                await route.fulfill(**fulfill_options)
            else:  # continue
                continue_options = action.get('continue_options', {})
                await route.continue_(**continue_options)

        # Add route handler
        await self.page.route(url_pattern, route_handler)

        result['url_pattern'] = url_pattern
        result['handler_type'] = handler_type

    async def _perform_intercept_response(self, action: Dict[str, Any], result: Dict[str, Any]):
        """Perform intercept response action"""
        url_pattern = action.get('url_pattern')
        js_function = action.get('js_function')  # JavaScript function to process response

        if not url_pattern:
            result['error'] = "URL pattern is required for intercept_response action"
            return

        if not js_function:
            result['error'] = "JavaScript function is required for intercept_response action"
            return

        # Create response handler
        async def response_handler(response):
            if response.ok:
                # Execute JavaScript function with response data
                try:
                    response_text = await response.text()
                    await self.page.evaluate(js_function, response_text)
                except Exception as e:
                    logger.error(f"Error processing response: {e}")

        # Add response handler using page.on('response')
        self.page.on('response', lambda response:
            asyncio.create_task(response_handler(response))
            if re.search(url_pattern, response.url) else None
        )

        result['url_pattern'] = url_pattern

    async def optimize_memory_usage(self):
        """Optimize memory usage by clearing browser caches"""
        try:
            # Clear browser caches
            await self.page.evaluate("""
                () => {
                    if (window.caches) {
                        caches.keys().then(keys => {
                            keys.forEach(key => caches.delete(key));
                        });
                    }
                    if (window.performance && window.performance.memory) {
                        console.log('Memory usage before cleanup:', window.performance.memory.usedJSHeapSize / (1024 * 1024), 'MB');
                    }
                    if (window.gc) {
                        window.gc();
                    }
                    if (window.performance && window.performance.memory) {
                        console.log('Memory usage after cleanup:', window.performance.memory.usedJSHeapSize / (1024 * 1024), 'MB');
                    }
                }
            """)

            # Get memory usage
            memory_info = await self.page.evaluate("""
                () => {
                    if (window.performance && window.performance.memory) {
                        return {
                            usedJSHeapSize: window.performance.memory.usedJSHeapSize,
                            totalJSHeapSize: window.performance.memory.totalJSHeapSize,
                            jsHeapSizeLimit: window.performance.memory.jsHeapSizeLimit
                        };
                    }
                    return null;
                }
            """)

            if memory_info:
                self._resource_usage['memory'] = {
                    'used_js_heap_size_mb': memory_info['usedJSHeapSize'] / (1024 * 1024),
                    'total_js_heap_size_mb': memory_info['totalJSHeapSize'] / (1024 * 1024),
                    'js_heap_size_limit_mb': memory_info['jsHeapSizeLimit'] / (1024 * 1024)
                }

            return True
        except Exception as e:
            logger.error(f"Error optimizing memory usage: {e}")
            return False

    async def get_performance_metrics(self):
        """Get performance metrics"""
        try:
            metrics = await self.page.evaluate("""
                () => {
                    const perfEntries = performance.getEntriesByType('navigation');
                    if (perfEntries.length > 0) {
                        const navigationEntry = perfEntries[0];
                        return {
                            domContentLoaded: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
                            load: navigationEntry.loadEventEnd - navigationEntry.loadEventStart,
                            domInteractive: navigationEntry.domInteractive - navigationEntry.startTime,
                            firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
                            firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
                        };
                    }
                    return null;
                }
            """)

            if metrics:
                self._performance_metrics = metrics

            return self._performance_metrics
        except Exception as e:
            logger.error(f"Error getting performance metrics: {e}")
            return {}
