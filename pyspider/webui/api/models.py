#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
# Author: Binux<i@binux.me>
#         http://binux.me
# Created on 2024-04-29 10:00:00

"""
PySpider API models
"""

from typing import Dict, List, Optional, Any, Union
from enum import Enum
from datetime import datetime
from pydantic import BaseModel, Field, validator, HttpUrl

class ProjectStatus(str, Enum):
    """Project status enum"""
    STOPPED = "STOPPED"
    RUNNING = "RUNNING"
    PAUSED = "PAUSED"
    DEBUG = "DEBUG"

class TaskStatus(str, Enum):
    """Task status enum"""
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"
    RETRY = "RETRY"

class ProjectCreateModel(BaseModel):
    """Project creation model"""
    name: str = Field(..., description="Project name", example="example_project")
    group: Optional[str] = Field(None, description="Project group", example="test_group")
    status: ProjectStatus = Field(ProjectStatus.STOPPED, description="Project status")
    script: str = Field(..., description="Project script content")
    comments: Optional[str] = Field(None, description="Project comments")
    rate: Optional[float] = Field(5.0, description="Project rate limit (requests per second)", ge=0.1)
    burst: Optional[int] = Field(10, description="Project burst limit", ge=1)
    timeout: Optional[int] = Field(60, description="Project timeout (seconds)", ge=1)
    
    class Config:
        schema_extra = {
            "example": {
                "name": "example_project",
                "group": "test_group",
                "status": "STOPPED",
                "script": "from pyspider.libs.base_handler import *\n\nclass Handler(BaseHandler):\n    crawl_config = {\n    }\n    \n    @every(minutes=24*60)\n    def on_start(self):\n        self.crawl('http://example.com/', callback=self.index_page)\n    \n    @config(age=10*24*60*60)\n    def index_page(self, response):\n        return {'title': response.doc('title').text()}\n",
                "comments": "Example project",
                "rate": 5.0,
                "burst": 10,
                "timeout": 60
            }
        }

class ProjectUpdateModel(BaseModel):
    """Project update model"""
    name: Optional[str] = Field(None, description="Project name", example="example_project")
    group: Optional[str] = Field(None, description="Project group", example="test_group")
    status: Optional[ProjectStatus] = Field(None, description="Project status")
    script: Optional[str] = Field(None, description="Project script content")
    comments: Optional[str] = Field(None, description="Project comments")
    rate: Optional[float] = Field(None, description="Project rate limit (requests per second)", ge=0.1)
    burst: Optional[int] = Field(None, description="Project burst limit", ge=1)
    timeout: Optional[int] = Field(None, description="Project timeout (seconds)", ge=1)

class ProjectModel(BaseModel):
    """Project model"""
    name: str = Field(..., description="Project name", example="example_project")
    group: Optional[str] = Field(None, description="Project group", example="test_group")
    status: ProjectStatus = Field(..., description="Project status")
    script: str = Field(..., description="Project script content")
    comments: Optional[str] = Field(None, description="Project comments")
    rate: float = Field(5.0, description="Project rate limit (requests per second)")
    burst: int = Field(10, description="Project burst limit")
    timeout: int = Field(60, description="Project timeout (seconds)")
    updatetime: datetime = Field(..., description="Last update time")
    
    # Stats
    tasks_count: Optional[Dict[str, int]] = Field(None, description="Tasks count by status")
    progress: Optional[float] = Field(None, description="Project progress (0-1)")
    avg_time: Optional[float] = Field(None, description="Average task time (seconds)")

class TaskCreateModel(BaseModel):
    """Task creation model"""
    project: str = Field(..., description="Project name", example="example_project")
    url: HttpUrl = Field(..., description="Task URL", example="http://example.com/")
    fetch_type: Optional[str] = Field(None, description="Fetch type", example="js")
    callback: Optional[str] = Field(None, description="Callback function name", example="index_page")
    age: Optional[int] = Field(None, description="Task age (seconds)", example=3600)
    priority: Optional[int] = Field(0, description="Task priority", ge=-10, le=10)
    exetime: Optional[datetime] = Field(None, description="Task execution time")
    retries: Optional[int] = Field(0, description="Task retries", ge=0)
    
    class Config:
        schema_extra = {
            "example": {
                "project": "example_project",
                "url": "http://example.com/",
                "fetch_type": "js",
                "callback": "index_page",
                "age": 3600,
                "priority": 0,
                "retries": 0
            }
        }

class TaskModel(BaseModel):
    """Task model"""
    taskid: str = Field(..., description="Task ID")
    project: str = Field(..., description="Project name")
    url: HttpUrl = Field(..., description="Task URL")
    status: TaskStatus = Field(..., description="Task status")
    fetch_type: Optional[str] = Field(None, description="Fetch type")
    callback: Optional[str] = Field(None, description="Callback function name")
    age: Optional[int] = Field(None, description="Task age (seconds)")
    priority: int = Field(0, description="Task priority")
    exetime: Optional[datetime] = Field(None, description="Task execution time")
    retries: int = Field(0, description="Task retries")
    lastcrawltime: Optional[datetime] = Field(None, description="Last crawl time")
    updatetime: datetime = Field(..., description="Last update time")
    
    # Additional fields
    schedule: Optional[Dict[str, Any]] = Field(None, description="Task schedule information")
    fetch: Optional[Dict[str, Any]] = Field(None, description="Task fetch information")
    process: Optional[Dict[str, Any]] = Field(None, description="Task process information")

class ResultModel(BaseModel):
    """Result model"""
    taskid: str = Field(..., description="Task ID")
    project: str = Field(..., description="Project name")
    url: HttpUrl = Field(..., description="Task URL")
    result: Dict[str, Any] = Field(..., description="Task result")
    updatetime: datetime = Field(..., description="Result update time")

class StatusModel(BaseModel):
    """Status model"""
    scheduler: Dict[str, Any] = Field(..., description="Scheduler status")
    fetcher: Dict[str, Any] = Field(..., description="Fetcher status")
    processor: Dict[str, Any] = Field(..., description="Processor status")
    result_worker: Optional[Dict[str, Any]] = Field(None, description="Result worker status")
    
    # Global stats
    projects_count: int = Field(..., description="Total projects count")
    tasks_count: Dict[str, int] = Field(..., description="Tasks count by status")
    
    # Version info
    version: str = Field(..., description="PySpider version")
    api_version: str = Field(..., description="API version")
