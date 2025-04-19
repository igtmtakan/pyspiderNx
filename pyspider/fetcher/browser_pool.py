#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
# Author: Binux<i@binux.me>
#         http://binux.me
# Created on 2024-04-30 10:00:00

"""
Browser Pool for Playwright/Puppeteer
"""

import time
import asyncio
import logging
from typing import Dict, List, Any, Optional, Union, Tuple
from playwright.async_api import async_playwright, Browser, BrowserContext, Page

logger = logging.getLogger('fetcher.browser_pool')

class BrowserInstance:
    """Browser instance with metadata"""
    
    def __init__(self, browser: Browser, created_at: float, last_used_at: float):
        self.browser = browser
        self.created_at = created_at
        self.last_used_at = last_used_at
        self.contexts: List[BrowserContext] = []
        self.pages: Dict[Page, BrowserContext] = {}
        self.in_use = False
        self.total_requests = 0
        self.memory_usage = 0  # in MB
    
    def update_last_used(self):
        """Update last used timestamp"""
        self.last_used_at = time.time()
    
    def add_context(self, context: BrowserContext):
        """Add browser context"""
        self.contexts.append(context)
    
    def add_page(self, page: Page, context: BrowserContext):
        """Add page with its context"""
        self.pages[page] = context
    
    def remove_context(self, context: BrowserContext):
        """Remove browser context"""
        if context in self.contexts:
            self.contexts.remove(context)
    
    def remove_page(self, page: Page):
        """Remove page"""
        if page in self.pages:
            del self.pages[page]
    
    async def close_all_contexts(self):
        """Close all contexts"""
        for context in self.contexts:
            await context.close()
        self.contexts = []
        self.pages = {}
    
    async def get_memory_usage(self) -> float:
        """Get browser memory usage in MB"""
        try:
            # This is a simplified approach, actual implementation may vary
            # based on the browser and platform
            js_heap_size = await self.browser.evaluate_handle('() => performance.memory.usedJSHeapSize')
            heap_size_mb = await js_heap_size.json_value() / (1024 * 1024)
            self.memory_usage = heap_size_mb
            return heap_size_mb
        except Exception as e:
            logger.warning(f"Failed to get memory usage: {e}")
            return 0

class BrowserPool:
    """
    Pool of browser instances for efficient resource usage
    """
    
    def __init__(
        self, 
        max_browsers: int = 5,
        max_contexts_per_browser: int = 10,
        max_pages_per_context: int = 5,
        browser_ttl: int = 3600,  # 1 hour
        context_ttl: int = 600,   # 10 minutes
        memory_limit: int = 2048  # 2GB
    ):
        """
        Initialize browser pool
        
        Args:
            max_browsers: Maximum number of browser instances
            max_contexts_per_browser: Maximum number of contexts per browser
            max_pages_per_context: Maximum number of pages per context
            browser_ttl: Browser time to live in seconds
            context_ttl: Context time to live in seconds
            memory_limit: Memory limit per browser in MB
        """
        self.max_browsers = max_browsers
        self.max_contexts_per_browser = max_contexts_per_browser
        self.max_pages_per_context = max_pages_per_context
        self.browser_ttl = browser_ttl
        self.context_ttl = context_ttl
        self.memory_limit = memory_limit
        
        self.browsers: List[BrowserInstance] = []
        self.playwright = None
        self.lock = asyncio.Lock()
        self.initialized = False
        self.last_cleanup = time.time()
        self.cleanup_interval = 60  # 1 minute
    
    async def init(self):
        """Initialize the pool"""
        if not self.initialized:
            self.playwright = await async_playwright().start()
            self.initialized = True
            logger.info("Browser pool initialized")
    
    async def get_browser(self, browser_type: str = 'chromium', **options) -> Tuple[Browser, BrowserInstance]:
        """
        Get a browser instance from the pool or create a new one
        
        Args:
            browser_type: Browser type (chromium, firefox, webkit)
            **options: Browser launch options
            
        Returns:
            Tuple of (Browser, BrowserInstance)
        """
        await self.init()
        
        async with self.lock:
            # Check if cleanup is needed
            current_time = time.time()
            if current_time - self.last_cleanup > self.cleanup_interval:
                await self._cleanup()
                self.last_cleanup = current_time
            
            # Try to find an available browser
            for browser_instance in self.browsers:
                if not browser_instance.in_use and len(browser_instance.contexts) < self.max_contexts_per_browser:
                    browser_instance.in_use = True
                    browser_instance.update_last_used()
                    return browser_instance.browser, browser_instance
            
            # Create a new browser if pool is not full
            if len(self.browsers) < self.max_browsers:
                browser_instance = await self._create_browser(browser_type, **options)
                return browser_instance.browser, browser_instance
            
            # If pool is full, wait for an available browser
            logger.warning("Browser pool is full, waiting for an available browser")
            # Find the least recently used browser
            browser_instance = min(self.browsers, key=lambda b: b.last_used_at)
            # Close all contexts to free resources
            await browser_instance.close_all_contexts()
            browser_instance.in_use = True
            browser_instance.update_last_used()
            return browser_instance.browser, browser_instance
    
    async def get_context(self, browser_instance: BrowserInstance, **options) -> BrowserContext:
        """
        Get a browser context from the browser instance
        
        Args:
            browser_instance: Browser instance
            **options: Context creation options
            
        Returns:
            BrowserContext
        """
        # Create a new context
        context = await browser_instance.browser.new_context(**options)
        browser_instance.add_context(context)
        return context
    
    async def get_page(self, context: BrowserContext, browser_instance: BrowserInstance) -> Page:
        """
        Get a page from the context
        
        Args:
            context: Browser context
            browser_instance: Browser instance
            
        Returns:
            Page
        """
        # Create a new page
        page = await context.new_page()
        browser_instance.add_page(page, context)
        return page
    
    async def release_browser(self, browser_instance: BrowserInstance):
        """
        Release a browser instance back to the pool
        
        Args:
            browser_instance: Browser instance
        """
        async with self.lock:
            browser_instance.in_use = False
            browser_instance.update_last_used()
    
    async def release_context(self, context: BrowserContext, browser_instance: BrowserInstance):
        """
        Release a context back to the pool
        
        Args:
            context: Browser context
            browser_instance: Browser instance
        """
        # Remove pages associated with this context
        pages_to_remove = [page for page, ctx in browser_instance.pages.items() if ctx == context]
        for page in pages_to_remove:
            browser_instance.remove_page(page)
        
        # Close the context
        await context.close()
        browser_instance.remove_context(context)
    
    async def _create_browser(self, browser_type: str = 'chromium', **options) -> BrowserInstance:
        """
        Create a new browser instance
        
        Args:
            browser_type: Browser type (chromium, firefox, webkit)
            **options: Browser launch options
            
        Returns:
            BrowserInstance
        """
        # Set default options for better performance
        default_options = {
            'args': [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--disable-gpu',
                '--disable-extensions',
                '--disable-background-networking',
                '--disable-background-timer-throttling',
                '--disable-backgrounding-occluded-windows',
                '--disable-breakpad',
                '--disable-component-extensions-with-background-pages',
                '--disable-features=TranslateUI,BlinkGenPropertyTrees',
                '--disable-ipc-flooding-protection',
                '--disable-renderer-backgrounding',
                '--enable-features=NetworkService,NetworkServiceInProcess',
                '--force-color-profile=srgb',
                '--hide-scrollbars',
                '--metrics-recording-only',
                '--mute-audio',
            ]
        }
        
        # Merge default options with user options
        merged_options = {**default_options, **options}
        
        # Create browser based on type
        if browser_type == 'chromium':
            browser = await self.playwright.chromium.launch(**merged_options)
        elif browser_type == 'firefox':
            browser = await self.playwright.firefox.launch(**merged_options)
        elif browser_type == 'webkit':
            browser = await self.playwright.webkit.launch(**merged_options)
        else:
            raise ValueError(f"Unsupported browser type: {browser_type}")
        
        # Create browser instance
        now = time.time()
        browser_instance = BrowserInstance(browser, now, now)
        self.browsers.append(browser_instance)
        
        logger.info(f"Created new browser instance ({browser_type}), total: {len(self.browsers)}")
        return browser_instance
    
    async def _cleanup(self):
        """Clean up expired browsers and contexts"""
        current_time = time.time()
        browsers_to_remove = []
        
        for browser_instance in self.browsers:
            # Skip browsers in use
            if browser_instance.in_use:
                continue
            
            # Check memory usage
            memory_usage = await browser_instance.get_memory_usage()
            if memory_usage > self.memory_limit:
                logger.info(f"Browser memory usage ({memory_usage}MB) exceeds limit ({self.memory_limit}MB), closing")
                browsers_to_remove.append(browser_instance)
                continue
            
            # Check browser TTL
            if current_time - browser_instance.created_at > self.browser_ttl:
                logger.info(f"Browser TTL expired ({self.browser_ttl}s), closing")
                browsers_to_remove.append(browser_instance)
                continue
            
            # Check context TTL
            contexts_to_remove = []
            for context in browser_instance.contexts:
                # Find all pages for this context
                pages = [page for page, ctx in browser_instance.pages.items() if ctx == context]
                
                # If no pages or all pages are idle for too long, close the context
                if not pages or all(current_time - browser_instance.last_used_at > self.context_ttl for page in pages):
                    contexts_to_remove.append(context)
            
            # Close expired contexts
            for context in contexts_to_remove:
                await self.release_context(context, browser_instance)
        
        # Close and remove expired browsers
        for browser_instance in browsers_to_remove:
            await browser_instance.close_all_contexts()
            await browser_instance.browser.close()
            self.browsers.remove(browser_instance)
    
    async def close(self):
        """Close all browsers and the pool"""
        async with self.lock:
            for browser_instance in self.browsers:
                await browser_instance.close_all_contexts()
                await browser_instance.browser.close()
            
            self.browsers = []
            
            if self.playwright:
                await self.playwright.stop()
                self.playwright = None
            
            self.initialized = False
            logger.info("Browser pool closed")

# Global instance
browser_pool = BrowserPool()
