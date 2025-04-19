#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
# Author: Binux<i@binux.me>
#         http://binux.me
# Created on 2024-04-29 10:00:00

"""
API dependencies
"""

import logging
from typing import Optional, Dict, Any
from fastapi import Depends, HTTPException, status, Header

from pyspider.webui.app import app as pyspider_app

logger = logging.getLogger('api.dependencies')

def get_scheduler():
    """Get scheduler instance"""
    scheduler = getattr(pyspider_app, 'scheduler', None)
    if scheduler is None:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Scheduler not available"
        )
    return scheduler

def get_fetcher():
    """Get fetcher instance"""
    fetcher = getattr(pyspider_app, 'fetcher', None)
    if fetcher is None:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Fetcher not available"
        )
    return fetcher

def get_processor():
    """Get processor instance"""
    processor = getattr(pyspider_app, 'processor', None)
    if processor is None:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Processor not available"
        )
    return processor

def get_result_worker():
    """Get result worker instance"""
    result_worker = getattr(pyspider_app, 'result_worker', None)
    return result_worker  # Can be None

def get_nedb():
    """Get nedb instance"""
    nedb = getattr(pyspider_app, 'nedb', None)
    if nedb is None:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Database not available"
        )
    return nedb

async def verify_api_key(x_api_key: Optional[str] = Header(None)):
    """Verify API key"""
    from pyspider.webui.api.config import settings
    
    if not settings.AUTH_ENABLED:
        return True
    
    if not x_api_key:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="API key required"
        )
    
    # Simple API key verification
    # In a real application, you would check against a database
    if x_api_key != "YOUR_API_KEY":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid API key"
        )
    
    return True
