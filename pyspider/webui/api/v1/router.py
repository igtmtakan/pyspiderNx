#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
# Author: Binux<i@binux.me>
#         http://binux.me
# Created on 2024-04-29 10:00:00

"""
PySpider API v1 router
"""

import logging
from typing import List, Dict, Any, Optional
from fastapi import APIRouter, Depends, HTTPException, Query, Path, Body, status

# Import API modules
from pyspider.webui.api.v1.time_series import router as time_series_router

from pyspider.webui.api.models import (
    ProjectModel, TaskModel, ResultModel, StatusModel,
    ProjectCreateModel, ProjectUpdateModel, TaskCreateModel
)
from pyspider.webui.api.dependencies import (
    get_scheduler, get_fetcher, get_processor, get_result_worker, verify_api_key
)

logger = logging.getLogger('api.v1')

router = APIRouter(dependencies=[Depends(verify_api_key)])

# Include API routers
router.include_router(time_series_router)

@router.get("/", summary="API v1 root")
async def root():
    """API v1 root endpoint"""
    return {
        "version": "1.0",
        "status": "ok",
        "message": "PySpider API v1"
    }

# Projects endpoints

@router.get("/projects", response_model=List[ProjectModel], summary="List projects")
async def list_projects(
    group: Optional[str] = Query(None, description="Filter by project group"),
    status: Optional[str] = Query(None, description="Filter by project status"),
    scheduler=Depends(get_scheduler)
):
    """
    List all projects

    - **group**: Filter projects by group
    - **status**: Filter projects by status
    """
    projects = await scheduler.projects.get_all(group=group, status=status)
    return projects

@router.post("/projects", response_model=ProjectModel, status_code=status.HTTP_201_CREATED, summary="Create project")
async def create_project(
    project: ProjectCreateModel,
    scheduler=Depends(get_scheduler)
):
    """
    Create a new project

    - **name**: Project name (required)
    - **group**: Project group
    - **status**: Project status
    - **script**: Project script content (required)
    - **comments**: Project comments
    - **rate**: Project rate limit (requests per second)
    - **burst**: Project burst limit
    - **timeout**: Project timeout (seconds)
    """
    # Check if project already exists
    existing = await scheduler.projects.get(project.name)
    if existing:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"Project '{project.name}' already exists"
        )

    # Create project
    try:
        project_data = project.dict()
        result = await scheduler.projects.add(project_data)
        return result
    except Exception as e:
        logger.error(f"Error creating project: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error creating project: {str(e)}"
        )

@router.get("/projects/{project_name}", response_model=ProjectModel, summary="Get project")
async def get_project(
    project_name: str = Path(..., description="Project name"),
    scheduler=Depends(get_scheduler)
):
    """
    Get project by name

    - **project_name**: Project name
    """
    project = await scheduler.projects.get(project_name)
    if not project:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Project '{project_name}' not found"
        )
    return project

@router.put("/projects/{project_name}", response_model=ProjectModel, summary="Update project")
async def update_project(
    project_name: str = Path(..., description="Project name"),
    project: ProjectUpdateModel = Body(...),
    scheduler=Depends(get_scheduler)
):
    """
    Update project

    - **project_name**: Project name
    - **project**: Project data to update
    """
    # Check if project exists
    existing = await scheduler.projects.get(project_name)
    if not existing:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Project '{project_name}' not found"
        )

    # Update project
    try:
        project_data = project.dict(exclude_unset=True)
        result = await scheduler.projects.update(project_name, project_data)
        return result
    except Exception as e:
        logger.error(f"Error updating project: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error updating project: {str(e)}"
        )

@router.delete("/projects/{project_name}", summary="Delete project")
async def delete_project(
    project_name: str = Path(..., description="Project name"),
    scheduler=Depends(get_scheduler)
):
    """
    Delete project

    - **project_name**: Project name
    """
    # Check if project exists
    existing = await scheduler.projects.get(project_name)
    if not existing:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Project '{project_name}' not found"
        )

    # Delete project
    try:
        await scheduler.projects.delete(project_name)
        return {"status": "ok", "message": f"Project '{project_name}' deleted"}
    except Exception as e:
        logger.error(f"Error deleting project: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error deleting project: {str(e)}"
        )

# Tasks endpoints

@router.get("/tasks", response_model=List[TaskModel], summary="List tasks")
async def list_tasks(
    project: Optional[str] = Query(None, description="Filter by project name"),
    status: Optional[str] = Query(None, description="Filter by task status"),
    scheduler=Depends(get_scheduler)
):
    """
    List tasks

    - **project**: Filter tasks by project name
    - **status**: Filter tasks by status
    """
    tasks = await scheduler.tasks.get_all(project=project, status=status)
    return tasks

@router.post("/tasks", response_model=TaskModel, status_code=status.HTTP_201_CREATED, summary="Create task")
async def create_task(
    task: TaskCreateModel,
    scheduler=Depends(get_scheduler)
):
    """
    Create a new task

    - **project**: Project name (required)
    - **url**: Task URL (required)
    - **fetch_type**: Fetch type
    - **callback**: Callback function name
    - **age**: Task age (seconds)
    - **priority**: Task priority
    - **exetime**: Task execution time
    - **retries**: Task retries
    """
    # Check if project exists
    project = await scheduler.projects.get(task.project)
    if not project:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Project '{task.project}' not found"
        )

    # Create task
    try:
        task_data = task.dict()
        result = await scheduler.tasks.add(task_data)
        return result
    except Exception as e:
        logger.error(f"Error creating task: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error creating task: {str(e)}"
        )

@router.get("/tasks/{task_id}", response_model=TaskModel, summary="Get task")
async def get_task(
    task_id: str = Path(..., description="Task ID"),
    scheduler=Depends(get_scheduler)
):
    """
    Get task by ID

    - **task_id**: Task ID
    """
    task = await scheduler.tasks.get(task_id)
    if not task:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Task '{task_id}' not found"
        )
    return task

@router.delete("/tasks/{task_id}", summary="Delete task")
async def delete_task(
    task_id: str = Path(..., description="Task ID"),
    scheduler=Depends(get_scheduler)
):
    """
    Delete task

    - **task_id**: Task ID
    """
    # Check if task exists
    task = await scheduler.tasks.get(task_id)
    if not task:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Task '{task_id}' not found"
        )

    # Delete task
    try:
        await scheduler.tasks.delete(task_id)
        return {"status": "ok", "message": f"Task '{task_id}' deleted"}
    except Exception as e:
        logger.error(f"Error deleting task: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error deleting task: {str(e)}"
        )

# Results endpoints

@router.get("/results", response_model=List[ResultModel], summary="List results")
async def list_results(
    project: Optional[str] = Query(None, description="Filter by project name"),
    result_worker=Depends(get_result_worker)
):
    """
    List results

    - **project**: Filter results by project name
    """
    if not result_worker:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Result worker not available"
        )

    results = await result_worker.results.get_all(project=project)
    return results

@router.get("/results/{result_id}", response_model=ResultModel, summary="Get result")
async def get_result(
    result_id: str = Path(..., description="Result ID"),
    result_worker=Depends(get_result_worker)
):
    """
    Get result by ID

    - **result_id**: Result ID
    """
    if not result_worker:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Result worker not available"
        )

    result = await result_worker.results.get(result_id)
    if not result:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Result '{result_id}' not found"
        )
    return result

# Status endpoint

@router.get("/status", response_model=StatusModel, summary="Get system status")
async def get_status(
    scheduler=Depends(get_scheduler),
    fetcher=Depends(get_fetcher),
    processor=Depends(get_processor),
    result_worker=Depends(get_result_worker)
):
    """
    Get system status
    """
    # Get component status
    scheduler_status = await scheduler.status()
    fetcher_status = await fetcher.status()
    processor_status = await processor.status()

    result_worker_status = None
    if result_worker:
        result_worker_status = await result_worker.status()

    # Get global stats
    projects_count = await scheduler.projects.count()
    tasks_count = await scheduler.tasks.count_by_status()

    return {
        "scheduler": scheduler_status,
        "fetcher": fetcher_status,
        "processor": processor_status,
        "result_worker": result_worker_status,
        "projects_count": projects_count,
        "tasks_count": tasks_count,
        "version": "1.0.0",  # PySpider version
        "api_version": "1.0"  # API version
    }
