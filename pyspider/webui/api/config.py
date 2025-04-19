#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
# Author: Binux<i@binux.me>
#         http://binux.me
# Created on 2024-04-29 10:00:00

"""
API configuration
"""

import os
from typing import List, Dict, Any, Optional
from pydantic import BaseSettings

class Settings(BaseSettings):
    """API settings"""
    # API settings
    API_TITLE: str = "PySpider API"
    API_DESCRIPTION: str = "RESTful API for PySpider"
    API_VERSION: str = "2.0.0"
    
    # CORS settings
    CORS_ORIGINS: List[str] = ["*"]
    
    # Rate limiting
    RATE_LIMIT_ENABLED: bool = True
    RATE_LIMIT_REQUESTS: int = 100
    RATE_LIMIT_PERIOD: int = 60  # seconds
    
    # Authentication
    AUTH_ENABLED: bool = False
    AUTH_USERNAME: Optional[str] = None
    AUTH_PASSWORD: Optional[str] = None
    JWT_SECRET: Optional[str] = None
    JWT_ALGORITHM: str = "HS256"
    JWT_EXPIRES_MINUTES: int = 60
    
    # Database
    DB_URL: Optional[str] = None
    
    # Logging
    LOG_LEVEL: str = "INFO"
    
    class Config:
        env_prefix = "PYSPIDER_API_"
        env_file = ".env"

settings = Settings()
