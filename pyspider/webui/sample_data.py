#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
# Author: Binux<i@binux.me>
#         http://binux.me
# Created on 2024-04-25 12:00:00

import time
import random
import logging
from pyspider.libs.time_series_store import time_series_store

logger = logging.getLogger('webui.sample_data')

def add_sample_data():
    """Add sample time series data for testing"""
    logger.info("Adding sample time series data...")
    
    # Sample projects
    projects = ['project1', 'project2', 'project3']
    
    # Sample metrics
    metrics = ['success_rate', 'total_time', 'fetch_time', 'process_time']
    
    # Generate data for the last hour
    now = time.time()
    start_time = now - 3600  # 1 hour ago
    
    # Generate data points every 5 minutes
    for timestamp in range(int(start_time), int(now), 300):
        for project in projects:
            for metric in metrics:
                if metric == 'success_rate':
                    # Success rate between 0.7 and 1.0
                    value = random.uniform(0.7, 1.0)
                else:
                    # Time metrics between 0.1 and 2.0 seconds
                    value = random.uniform(0.1, 2.0)
                
                # Add data point
                time_series_store.add_data_point(project, metric, value)
    
    logger.info("Sample data added successfully!")
    
    # Return the data for verification
    return time_series_store.get_all_data()

# Add sample data when this module is imported
sample_data = add_sample_data()
