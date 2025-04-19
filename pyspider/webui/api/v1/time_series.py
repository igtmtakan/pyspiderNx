#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
# Author: Binux<i@binux.me>
#         http://binux.me
# Created on 2024-04-25 10:30:00

import time
import logging
from typing import Dict, List, Optional, Any, Union
from fastapi import APIRouter, Query, HTTPException, Depends

from pyspider.libs.time_series_store import time_series_store

logger = logging.getLogger('api.time_series')

router = APIRouter(prefix="/time_series", tags=["time_series"])

@router.get("", summary="Get time series data")
async def get_time_series(
    project: Optional[str] = Query(None, description="Filter by project name"),
    metric: Optional[str] = Query(None, description="Filter by metric name"),
    start_time: Optional[float] = Query(None, description="Start time (timestamp)"),
    end_time: Optional[float] = Query(None, description="End time (timestamp)")
):
    """
    Get time series data for projects
    
    - **project**: Filter by project name
    - **metric**: Filter by metric name
    - **start_time**: Start time (timestamp)
    - **end_time**: End time (timestamp)
    """
    try:
        if project and metric:
            # Get data for a specific project and metric
            data = time_series_store.get_data(project, metric, start_time, end_time)
            return {project: {metric: data}}
        elif project:
            # Get all metrics for a specific project
            data = time_series_store.get_all_data(project, start_time, end_time)
            return {project: data}
        else:
            # Get data for all projects
            data = time_series_store.get_all_data(None, start_time, end_time)
            return data
    except Exception as e:
        logger.error(f"Error getting time series data: {e}")
        raise HTTPException(status_code=500, detail=f"Error getting time series data: {str(e)}")

@router.get("/metrics", summary="Get available metrics")
async def get_available_metrics():
    """
    Get available metrics for time series data
    """
    try:
        # Get all data
        all_data = time_series_store.get_all_data()
        
        # Extract unique metrics
        metrics = set()
        for project_data in all_data.values():
            metrics.update(project_data.keys())
        
        return list(metrics)
    except Exception as e:
        logger.error(f"Error getting available metrics: {e}")
        raise HTTPException(status_code=500, detail=f"Error getting available metrics: {str(e)}")
