#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
# Author: Binux<i@binux.me>
#         http://binux.me
# Created on 2024-04-30 10:00:00

"""
Resource Optimizer for Playwright/Puppeteer
"""

import time
import logging
import asyncio
import json
import os
from typing import Dict, List, Any, Optional, Union, Tuple
from playwright.async_api import Page, Browser, BrowserContext

logger = logging.getLogger('fetcher.resource_optimizer')

class ResourceOptimizer:
    """
    Optimize resource usage for Playwright/Puppeteer
    """
    
    def __init__(self, page: Optional[Page] = None, browser: Optional[Browser] = None):
        """
        Initialize resource optimizer
        
        Args:
            page: Playwright page
            browser: Playwright browser
        """
        self.page = page
        self.browser = browser
        self.resource_stats = {
            'memory': {},
            'network': {
                'requests': 0,
                'responses': 0,
                'failed': 0,
                'bytes_received': 0,
                'bytes_sent': 0
            },
            'cpu': {},
            'resources_by_type': {}
        }
        self.optimization_settings = {
            'block_images': False,
            'block_media': False,
            'block_fonts': False,
            'block_stylesheets': False,
            'block_third_party': False,
            'intercept_large_responses': False,
            'max_response_size_mb': 10,
            'auto_clear_cache': True,
            'auto_clear_cookies': False,
            'memory_monitor_interval': 60,  # seconds
            'memory_limit_mb': 2048,  # 2GB
            'auto_restart_on_memory_limit': True
        }
        self._monitoring_task = None
        self._resource_listeners_added = False
    
    async def setup(self, page: Optional[Page] = None, browser: Optional[Browser] = None):
        """
        Setup resource optimizer with page and browser
        
        Args:
            page: Playwright page
            browser: Playwright browser
        """
        if page:
            self.page = page
        if browser:
            self.browser = browser
        
        if self.page and not self._resource_listeners_added:
            await self._add_resource_listeners()
    
    async def optimize(self, settings: Optional[Dict[str, Any]] = None):
        """
        Apply optimization settings
        
        Args:
            settings: Optimization settings to apply
        """
        if settings:
            self.optimization_settings.update(settings)
        
        if not self.page:
            logger.warning("No page provided for optimization")
            return False
        
        try:
            # Apply request interception based on settings
            await self._setup_request_interception()
            
            # Clear cache if enabled
            if self.optimization_settings['auto_clear_cache']:
                await self.clear_cache()
            
            # Clear cookies if enabled
            if self.optimization_settings['auto_clear_cookies']:
                await self.clear_cookies()
            
            # Start memory monitoring if enabled
            if self.optimization_settings['memory_monitor_interval'] > 0:
                await self.start_memory_monitoring()
            
            # Apply browser-specific optimizations
            await self._apply_browser_optimizations()
            
            return True
        except Exception as e:
            logger.error(f"Error applying optimizations: {e}")
            return False
    
    async def _add_resource_listeners(self):
        """Add resource event listeners to page"""
        if not self.page:
            return
        
        # Track requests
        self.page.on('request', lambda request: self._on_request(request))
        
        # Track responses
        self.page.on('response', lambda response: asyncio.create_task(self._on_response(response)))
        
        # Track request failures
        self.page.on('requestfailed', lambda request: self._on_request_failed(request))
        
        self._resource_listeners_added = True
    
    def _on_request(self, request):
        """Handle request event"""
        self.resource_stats['network']['requests'] += 1
        
        # Track resources by type
        resource_type = request.resource_type
        if resource_type not in self.resource_stats['resources_by_type']:
            self.resource_stats['resources_by_type'][resource_type] = {
                'count': 0,
                'size': 0
            }
        self.resource_stats['resources_by_type'][resource_type]['count'] += 1
    
    async def _on_response(self, response):
        """Handle response event"""
        self.resource_stats['network']['responses'] += 1
        
        try:
            # Get response size
            body = await response.body()
            size = len(body) if body else 0
            self.resource_stats['network']['bytes_received'] += size
            
            # Track size by resource type
            resource_type = response.request.resource_type
            if resource_type in self.resource_stats['resources_by_type']:
                self.resource_stats['resources_by_type'][resource_type]['size'] += size
        except Exception as e:
            logger.debug(f"Error processing response: {e}")
    
    def _on_request_failed(self, request):
        """Handle request failed event"""
        self.resource_stats['network']['failed'] += 1
    
    async def _setup_request_interception(self):
        """Setup request interception based on settings"""
        if not self.page:
            return
        
        # Create route handler for resource blocking
        async def route_handler(route):
            request = route.request
            resource_type = request.resource_type
            url = request.url
            
            # Check if we should block this resource
            should_block = False
            
            if self.optimization_settings['block_images'] and resource_type == 'image':
                should_block = True
            elif self.optimization_settings['block_media'] and resource_type in ['media', 'websocket']:
                should_block = True
            elif self.optimization_settings['block_fonts'] and resource_type == 'font':
                should_block = True
            elif self.optimization_settings['block_stylesheets'] and resource_type == 'stylesheet':
                should_block = True
            elif self.optimization_settings['block_third_party'] and not self._is_same_origin(url, request.frame.url):
                should_block = True
            
            if should_block:
                await route.abort()
            else:
                await route.continue_()
        
        # Add route handler
        await self.page.route('**/*', route_handler)
    
    def _is_same_origin(self, url1: str, url2: str) -> bool:
        """Check if two URLs have the same origin"""
        try:
            from urllib.parse import urlparse
            
            parsed1 = urlparse(url1)
            parsed2 = urlparse(url2)
            
            origin1 = f"{parsed1.scheme}://{parsed1.netloc}"
            origin2 = f"{parsed2.scheme}://{parsed2.netloc}"
            
            return origin1 == origin2
        except Exception:
            return False
    
    async def clear_cache(self):
        """Clear browser cache"""
        if not self.page:
            return False
        
        try:
            # Clear browser cache using JavaScript
            await self.page.evaluate("""
                () => {
                    if (window.caches) {
                        caches.keys().then(keys => {
                            keys.forEach(key => caches.delete(key));
                        });
                    }
                }
            """)
            
            # Clear memory cache
            if self.browser:
                context = self.page.context
                if context:
                    # Create a new context with the same parameters
                    new_context = await self.browser.new_context(
                        viewport=self.page.viewport_size,
                        user_agent=await self.page.evaluate('navigator.userAgent')
                    )
                    
                    # Create a new page in the new context
                    new_page = await new_context.new_page()
                    
                    # Navigate to the same URL
                    current_url = self.page.url
                    if current_url and current_url != 'about:blank':
                        await new_page.goto(current_url)
                    
                    # Replace the old page with the new one
                    old_page = self.page
                    self.page = new_page
                    
                    # Close the old page and context
                    await old_page.close()
                    await context.close()
                    
                    # Re-add resource listeners
                    self._resource_listeners_added = False
                    await self._add_resource_listeners()
            
            return True
        except Exception as e:
            logger.error(f"Error clearing cache: {e}")
            return False
    
    async def clear_cookies(self):
        """Clear cookies"""
        if not self.page:
            return False
        
        try:
            context = self.page.context
            if context:
                await context.clear_cookies()
            return True
        except Exception as e:
            logger.error(f"Error clearing cookies: {e}")
            return False
    
    async def get_memory_usage(self) -> Dict[str, Any]:
        """Get memory usage statistics"""
        if not self.page:
            return {}
        
        try:
            # Get memory usage using JavaScript
            memory_info = await self.page.evaluate("""
                () => {
                    const result = {};
                    
                    if (window.performance && window.performance.memory) {
                        result.jsHeap = {
                            usedJSHeapSize: window.performance.memory.usedJSHeapSize,
                            totalJSHeapSize: window.performance.memory.totalJSHeapSize,
                            jsHeapSizeLimit: window.performance.memory.jsHeapSizeLimit
                        };
                    }
                    
                    return result;
                }
            """)
            
            # Process memory info
            result = {}
            
            if 'jsHeap' in memory_info:
                jsHeap = memory_info['jsHeap']
                result['js_heap_used_mb'] = jsHeap['usedJSHeapSize'] / (1024 * 1024)
                result['js_heap_total_mb'] = jsHeap['totalJSHeapSize'] / (1024 * 1024)
                result['js_heap_limit_mb'] = jsHeap['jsHeapSizeLimit'] / (1024 * 1024)
                result['js_heap_usage_percent'] = (jsHeap['usedJSHeapSize'] / jsHeap['jsHeapSizeLimit']) * 100
            
            # Update resource stats
            self.resource_stats['memory'] = result
            
            return result
        except Exception as e:
            logger.error(f"Error getting memory usage: {e}")
            return {}
    
    async def start_memory_monitoring(self):
        """Start memory monitoring"""
        if self._monitoring_task:
            # Already monitoring
            return
        
        async def monitor_memory():
            while True:
                try:
                    # Get memory usage
                    memory_usage = await self.get_memory_usage()
                    
                    # Check if memory limit is exceeded
                    if (self.optimization_settings['auto_restart_on_memory_limit'] and
                            'js_heap_used_mb' in memory_usage and
                            memory_usage['js_heap_used_mb'] > self.optimization_settings['memory_limit_mb']):
                        logger.warning(f"Memory limit exceeded: {memory_usage['js_heap_used_mb']}MB > "
                                      f"{self.optimization_settings['memory_limit_mb']}MB")
                        
                        # Clear cache to reduce memory usage
                        await self.clear_cache()
                    
                    # Wait for next check
                    await asyncio.sleep(self.optimization_settings['memory_monitor_interval'])
                except asyncio.CancelledError:
                    break
                except Exception as e:
                    logger.error(f"Error in memory monitoring: {e}")
                    await asyncio.sleep(self.optimization_settings['memory_monitor_interval'])
        
        self._monitoring_task = asyncio.create_task(monitor_memory())
    
    async def stop_memory_monitoring(self):
        """Stop memory monitoring"""
        if self._monitoring_task:
            self._monitoring_task.cancel()
            try:
                await self._monitoring_task
            except asyncio.CancelledError:
                pass
            self._monitoring_task = None
    
    async def _apply_browser_optimizations(self):
        """Apply browser-specific optimizations"""
        if not self.page:
            return
        
        try:
            # Disable animations
            await self.page.evaluate("""
                () => {
                    const style = document.createElement('style');
                    style.type = 'text/css';
                    style.innerHTML = `
                        * {
                            animation-duration: 0.001s !important;
                            transition-duration: 0.001s !important;
                        }
                    `;
                    document.head.appendChild(style);
                }
            """)
            
            # Reduce timer precision to reduce CPU usage
            await self.page.evaluate("""
                () => {
                    if (window.performance && window.performance.now) {
                        const originalNow = window.performance.now;
                        window.performance.now = function() {
                            return Math.round(originalNow.call(window.performance) / 10) * 10;
                        };
                    }
                }
            """)
            
            # Optimize rendering
            await self.page.evaluate("""
                () => {
                    if (window.requestAnimationFrame) {
                        const originalRAF = window.requestAnimationFrame;
                        let lastRAFTime = 0;
                        window.requestAnimationFrame = function(callback) {
                            const currentTime = Date.now();
                            if (currentTime - lastRAFTime < 32) {  // Limit to ~30fps
                                return null;
                            }
                            lastRAFTime = currentTime;
                            return originalRAF.call(window, callback);
                        };
                    }
                }
            """)
        except Exception as e:
            logger.error(f"Error applying browser optimizations: {e}")
    
    async def get_resource_stats(self) -> Dict[str, Any]:
        """Get resource usage statistics"""
        # Update memory stats
        await self.get_memory_usage()
        
        return self.resource_stats
    
    async def save_resource_stats(self, path: str) -> bool:
        """
        Save resource statistics to a file
        
        Args:
            path: Path to save the statistics
            
        Returns:
            True if successful, False otherwise
        """
        try:
            # Update stats before saving
            await self.get_memory_usage()
            
            # Add timestamp
            stats = {
                'timestamp': time.time(),
                'stats': self.resource_stats
            }
            
            # Save to file
            with open(path, 'w') as f:
                json.dump(stats, f, indent=2)
            
            return True
        except Exception as e:
            logger.error(f"Error saving resource stats: {e}")
            return False
    
    async def cleanup(self):
        """Clean up resources"""
        # Stop memory monitoring
        await self.stop_memory_monitoring()
        
        # Clear cache and cookies
        await self.clear_cache()
        await self.clear_cookies()

# Global instance
resource_optimizer = ResourceOptimizer()
