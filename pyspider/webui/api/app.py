#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
# Author: Binux<i@binux.me>
#         http://binux.me
# Created on 2024-04-29 10:00:00

"""
PySpider API application
"""

import os
import logging
from typing import Optional, Dict, Any, List, Union
from contextlib import asynccontextmanager

from fastapi import FastAPI, Depends, HTTPException, Query, Path, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, PlainTextResponse, RedirectResponse
from fastapi.openapi.docs import get_swagger_ui_html, get_redoc_html
from fastapi.staticfiles import StaticFiles

from pyspider.webui.api.models import (
    ProjectModel, TaskModel, ResultModel, StatusModel, 
    ProjectCreateModel, ProjectUpdateModel, TaskCreateModel
)
from pyspider.webui.api.formatters import (
    JSONFormatter, XMLFormatter, CSVFormatter, YAMLFormatter,
    get_formatter_for_content_type
)
from pyspider.webui.api.dependencies import get_scheduler, get_fetcher, get_processor, get_result_worker
from pyspider.webui.api.config import settings

logger = logging.getLogger('api')

# API version information
API_VERSIONS = ["v1", "v2"]
LATEST_VERSION = "v2"

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    logger.info("API starting up")
    yield
    # Shutdown
    logger.info("API shutting down")

def create_app() -> FastAPI:
    """Create FastAPI application"""
    app = FastAPI(
        title="PySpider API",
        description="RESTful API for PySpider",
        version="2.0.0",
        docs_url=None,  # Disable default docs
        redoc_url=None,  # Disable default redoc
        lifespan=lifespan
    )
    
    # Add CORS middleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.CORS_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    
    # Custom docs routes
    @app.get("/docs", include_in_schema=False)
    async def custom_swagger_ui_html():
        return get_swagger_ui_html(
            openapi_url=app.openapi_url,
            title=app.title + " - Swagger UI",
            oauth2_redirect_url=app.swagger_ui_oauth2_redirect_url,
            swagger_js_url="https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.9.0/swagger-ui-bundle.js",
            swagger_css_url="https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.9.0/swagger-ui.css",
        )

    @app.get("/redoc", include_in_schema=False)
    async def custom_redoc_html():
        return get_redoc_html(
            openapi_url=app.openapi_url,
            title=app.title + " - ReDoc",
            redoc_js_url="https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js",
        )
    
    # Root redirect to latest API version
    @app.get("/", include_in_schema=False)
    async def root_redirect():
        return RedirectResponse(url=f"/api/{LATEST_VERSION}/docs")
    
    # Include API routers
    from pyspider.webui.api.v1.router import router as router_v1
    from pyspider.webui.api.v2.router import router as router_v2
    
    app.include_router(router_v1, prefix="/api/v1", tags=["v1"])
    app.include_router(router_v2, prefix="/api/v2", tags=["v2"])
    
    # Content negotiation middleware
    @app.middleware("http")
    async def content_negotiation_middleware(request: Request, call_next):
        response = await call_next(request)
        
        # Only process API responses
        if not request.url.path.startswith("/api/"):
            return response
        
        # Skip if not JSON response
        if response.headers.get("content-type") != "application/json":
            return response
        
        # Get accepted content type
        accept = request.headers.get("accept", "application/json")
        formatter = get_formatter_for_content_type(accept)
        
        # If no specific formatter needed, return original response
        if formatter is None or isinstance(formatter, JSONFormatter):
            return response
        
        # Get response body
        body = b""
        async for chunk in response.body_iterator:
            body += chunk
        
        # Format response
        try:
            import json
            data = json.loads(body.decode())
            formatted_content = formatter.format(data)
            
            # Create new response with formatted content
            new_response = Response(
                content=formatted_content,
                status_code=response.status_code,
                headers=dict(response.headers),
                media_type=formatter.content_type
            )
            return new_response
        except Exception as e:
            logger.error(f"Error formatting response: {e}")
            return response
    
    return app
