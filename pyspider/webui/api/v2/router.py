#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
# Author: Binux<i@binux.me>
#         http://binux.me
# Created on 2024-04-29 10:00:00

"""
PySpider API v2 router
"""

import logging
from typing import List, Dict, Any, Optional
from fastapi import APIRouter, Depends, HTTPException, Query, Path, Body, status

from pyspider.webui.api.models import (
    ProjectModel, TaskModel, ResultModel, StatusModel, 
    ProjectCreateModel, ProjectUpdateModel, TaskCreateModel
)
from pyspider.webui.api.dependencies import (
    get_scheduler, get_fetcher, get_processor, get_result_worker, verify_api_key
)

logger = logging.getLogger('api.v2')

router = APIRouter(dependencies=[Depends(verify_api_key)])

@router.get("/", summary="API v2 root")
async def root():
    """API v2 root endpoint"""
    return {
        "version": "2.0",
        "status": "ok",
        "message": "PySpider API v2"
    }

# Projects endpoints

@router.get("/projects", response_model=List[ProjectModel], summary="List projects")
async def list_projects(
    group: Optional[str] = Query(None, description="Filter by project group"),
    status: Optional[str] = Query(None, description="Filter by project status"),
    name: Optional[str] = Query(None, description="Filter by project name (partial match)"),
    limit: int = Query(100, description="Maximum number of projects to return", ge=1, le=1000),
    offset: int = Query(0, description="Number of projects to skip", ge=0),
    scheduler=Depends(get_scheduler)
):
    """
    List all projects with pagination and filtering
    
    - **group**: Filter projects by group
    - **status**: Filter projects by status
    - **name**: Filter projects by name (partial match)
    - **limit**: Maximum number of projects to return (default: 100, max: 1000)
    - **offset**: Number of projects to skip (default: 0)
    """
    projects = await scheduler.projects.get_all(
        group=group, 
        status=status, 
        name=name,
        limit=limit,
        offset=offset
    )
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

@router.post("/projects/{project_name}/run", summary="Run project")
async def run_project(
    project_name: str = Path(..., description="Project name"),
    scheduler=Depends(get_scheduler)
):
    """
    Run project
    
    - **project_name**: Project name
    """
    # Check if project exists
    existing = await scheduler.projects.get(project_name)
    if not existing:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Project '{project_name}' not found"
        )
    
    # Run project
    try:
        await scheduler.projects.run(project_name)
        return {"status": "ok", "message": f"Project '{project_name}' started"}
    except Exception as e:
        logger.error(f"Error running project: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error running project: {str(e)}"
        )

@router.post("/projects/{project_name}/stop", summary="Stop project")
async def stop_project(
    project_name: str = Path(..., description="Project name"),
    scheduler=Depends(get_scheduler)
):
    """
    Stop project
    
    - **project_name**: Project name
    """
    # Check if project exists
    existing = await scheduler.projects.get(project_name)
    if not existing:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Project '{project_name}' not found"
        )
    
    # Stop project
    try:
        await scheduler.projects.stop(project_name)
        return {"status": "ok", "message": f"Project '{project_name}' stopped"}
    except Exception as e:
        logger.error(f"Error stopping project: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error stopping project: {str(e)}"
        )

@router.post("/projects/{project_name}/pause", summary="Pause project")
async def pause_project(
    project_name: str = Path(..., description="Project name"),
    scheduler=Depends(get_scheduler)
):
    """
    Pause project
    
    - **project_name**: Project name
    """
    # Check if project exists
    existing = await scheduler.projects.get(project_name)
    if not existing:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Project '{project_name}' not found"
        )
    
    # Pause project
    try:
        await scheduler.projects.pause(project_name)
        return {"status": "ok", "message": f"Project '{project_name}' paused"}
    except Exception as e:
        logger.error(f"Error pausing project: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error pausing project: {str(e)}"
        )

@router.post("/projects/{project_name}/resume", summary="Resume project")
async def resume_project(
    project_name: str = Path(..., description="Project name"),
    scheduler=Depends(get_scheduler)
):
    """
    Resume project
    
    - **project_name**: Project name
    """
    # Check if project exists
    existing = await scheduler.projects.get(project_name)
    if not existing:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Project '{project_name}' not found"
        )
    
    # Resume project
    try:
        await scheduler.projects.resume(project_name)
        return {"status": "ok", "message": f"Project '{project_name}' resumed"}
    except Exception as e:
        logger.error(f"Error resuming project: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error resuming project: {str(e)}"
        )

@router.get("/projects/{project_name}/tasks", response_model=List[TaskModel], summary="Get project tasks")
async def get_project_tasks(
    project_name: str = Path(..., description="Project name"),
    status: Optional[str] = Query(None, description="Filter by task status"),
    limit: int = Query(100, description="Maximum number of tasks to return", ge=1, le=1000),
    offset: int = Query(0, description="Number of tasks to skip", ge=0),
    scheduler=Depends(get_scheduler)
):
    """
    Get project tasks
    
    - **project_name**: Project name
    - **status**: Filter tasks by status
    - **limit**: Maximum number of tasks to return (default: 100, max: 1000)
    - **offset**: Number of tasks to skip (default: 0)
    """
    # Check if project exists
    existing = await scheduler.projects.get(project_name)
    if not existing:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Project '{project_name}' not found"
        )
    
    # Get project tasks
    tasks = await scheduler.tasks.get_all(
        project=project_name,
        status=status,
        limit=limit,
        offset=offset
    )
    return tasks

@router.get("/projects/{project_name}/results", response_model=List[ResultModel], summary="Get project results")
async def get_project_results(
    project_name: str = Path(..., description="Project name"),
    limit: int = Query(100, description="Maximum number of results to return", ge=1, le=1000),
    offset: int = Query(0, description="Number of results to skip", ge=0),
    result_worker=Depends(get_result_worker)
):
    """
    Get project results
    
    - **project_name**: Project name
    - **limit**: Maximum number of results to return (default: 100, max: 1000)
    - **offset**: Number of results to skip (default: 0)
    """
    if not result_worker:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Result worker not available"
        )
    
    # Get project results
    results = await result_worker.results.get_all(
        project=project_name,
        limit=limit,
        offset=offset
    )
    return results

# Tasks endpoints

@router.get("/tasks", response_model=List[TaskModel], summary="List tasks")
async def list_tasks(
    project: Optional[str] = Query(None, description="Filter by project name"),
    status: Optional[str] = Query(None, description="Filter by task status"),
    url: Optional[str] = Query(None, description="Filter by task URL (partial match)"),
    limit: int = Query(100, description="Maximum number of tasks to return", ge=1, le=1000),
    offset: int = Query(0, description="Number of tasks to skip", ge=0),
    scheduler=Depends(get_scheduler)
):
    """
    List tasks with pagination and filtering
    
    - **project**: Filter tasks by project name
    - **status**: Filter tasks by status
    - **url**: Filter tasks by URL (partial match)
    - **limit**: Maximum number of tasks to return (default: 100, max: 1000)
    - **offset**: Number of tasks to skip (default: 0)
    """
    tasks = await scheduler.tasks.get_all(
        project=project,
        status=status,
        url=url,
        limit=limit,
        offset=offset
    )
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

@router.post("/tasks/bulk", response_model=Dict[str, Any], status_code=status.HTTP_201_CREATED, summary="Create multiple tasks")
async def create_tasks_bulk(
    tasks: List[TaskCreateModel],
    scheduler=Depends(get_scheduler)
):
    """
    Create multiple tasks at once
    
    - **tasks**: List of tasks to create
    """
    if not tasks:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="No tasks provided"
        )
    
    # Check if projects exist
    projects = set(task.project for task in tasks)
    for project_name in projects:
        project = await scheduler.projects.get(project_name)
        if not project:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Project '{project_name}' not found"
            )
    
    # Create tasks
    try:
        results = []
        for task in tasks:
            task_data = task.dict()
            result = await scheduler.tasks.add(task_data)
            results.append(result)
        
        return {
            "status": "ok",
            "message": f"Created {len(results)} tasks",
            "tasks_count": len(results),
            "tasks": results
        }
    except Exception as e:
        logger.error(f"Error creating tasks: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error creating tasks: {str(e)}"
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

@router.put("/tasks/{task_id}", response_model=TaskModel, summary="Update task")
async def update_task(
    task_id: str = Path(..., description="Task ID"),
    task_update: Dict[str, Any] = Body(...),
    scheduler=Depends(get_scheduler)
):
    """
    Update task
    
    - **task_id**: Task ID
    - **task_update**: Task data to update
    """
    # Check if task exists
    task = await scheduler.tasks.get(task_id)
    if not task:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Task '{task_id}' not found"
        )
    
    # Update task
    try:
        result = await scheduler.tasks.update(task_id, task_update)
        return result
    except Exception as e:
        logger.error(f"Error updating task: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error updating task: {str(e)}"
        )

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

@router.post("/tasks/{task_id}/rerun", response_model=TaskModel, summary="Rerun task")
async def rerun_task(
    task_id: str = Path(..., description="Task ID"),
    scheduler=Depends(get_scheduler)
):
    """
    Rerun task
    
    - **task_id**: Task ID
    """
    # Check if task exists
    task = await scheduler.tasks.get(task_id)
    if not task:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Task '{task_id}' not found"
        )
    
    # Rerun task
    try:
        result = await scheduler.tasks.rerun(task_id)
        return result
    except Exception as e:
        logger.error(f"Error rerunning task: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error rerunning task: {str(e)}"
        )

# Results endpoints

@router.get("/results", response_model=List[ResultModel], summary="List results")
async def list_results(
    project: Optional[str] = Query(None, description="Filter by project name"),
    url: Optional[str] = Query(None, description="Filter by result URL (partial match)"),
    limit: int = Query(100, description="Maximum number of results to return", ge=1, le=1000),
    offset: int = Query(0, description="Number of results to skip", ge=0),
    result_worker=Depends(get_result_worker)
):
    """
    List results with pagination and filtering
    
    - **project**: Filter results by project name
    - **url**: Filter results by URL (partial match)
    - **limit**: Maximum number of results to return (default: 100, max: 1000)
    - **offset**: Number of results to skip (default: 0)
    """
    if not result_worker:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Result worker not available"
        )
    
    results = await result_worker.results.get_all(
        project=project,
        url=url,
        limit=limit,
        offset=offset
    )
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

@router.delete("/results/{result_id}", summary="Delete result")
async def delete_result(
    result_id: str = Path(..., description="Result ID"),
    result_worker=Depends(get_result_worker)
):
    """
    Delete result
    
    - **result_id**: Result ID
    """
    if not result_worker:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Result worker not available"
        )
    
    # Check if result exists
    result = await result_worker.results.get(result_id)
    if not result:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Result '{result_id}' not found"
        )
    
    # Delete result
    try:
        await result_worker.results.delete(result_id)
        return {"status": "ok", "message": f"Result '{result_id}' deleted"}
    except Exception as e:
        logger.error(f"Error deleting result: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error deleting result: {str(e)}"
        )

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
        "api_version": "2.0"  # API version
    }

# Statistics endpoints

@router.get("/statistics/projects", summary="Get projects statistics")
async def get_projects_statistics(
    scheduler=Depends(get_scheduler)
):
    """
    Get projects statistics
    """
    try:
        # Get projects count by status
        projects_by_status = await scheduler.projects.count_by_status()
        
        # Get projects count by group
        projects_by_group = await scheduler.projects.count_by_group()
        
        # Get top projects by tasks count
        top_projects = await scheduler.projects.get_top_by_tasks_count(limit=10)
        
        return {
            "projects_count": await scheduler.projects.count(),
            "projects_by_status": projects_by_status,
            "projects_by_group": projects_by_group,
            "top_projects": top_projects
        }
    except Exception as e:
        logger.error(f"Error getting projects statistics: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error getting projects statistics: {str(e)}"
        )

@router.get("/statistics/tasks", summary="Get tasks statistics")
async def get_tasks_statistics(
    scheduler=Depends(get_scheduler)
):
    """
    Get tasks statistics
    """
    try:
        # Get tasks count by status
        tasks_by_status = await scheduler.tasks.count_by_status()
        
        # Get tasks count by project
        tasks_by_project = await scheduler.tasks.count_by_project(limit=10)
        
        # Get tasks count by day
        tasks_by_day = await scheduler.tasks.count_by_day(days=7)
        
        return {
            "tasks_count": sum(tasks_by_status.values()),
            "tasks_by_status": tasks_by_status,
            "tasks_by_project": tasks_by_project,
            "tasks_by_day": tasks_by_day
        }
    except Exception as e:
        logger.error(f"Error getting tasks statistics: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error getting tasks statistics: {str(e)}"
        )

@router.get("/statistics/results", summary="Get results statistics")
async def get_results_statistics(
    result_worker=Depends(get_result_worker)
):
    """
    Get results statistics
    """
    if not result_worker:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Result worker not available"
        )
    
    try:
        # Get results count by project
        results_by_project = await result_worker.results.count_by_project(limit=10)
        
        # Get results count by day
        results_by_day = await result_worker.results.count_by_day(days=7)
        
        return {
            "results_count": await result_worker.results.count(),
            "results_by_project": results_by_project,
            "results_by_day": results_by_day
        }
    except Exception as e:
        logger.error(f"Error getting results statistics: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error getting results statistics: {str(e)}"
        )
