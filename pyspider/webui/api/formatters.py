#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
# Author: Binux<i@binux.me>
#         http://binux.me
# Created on 2024-04-29 10:00:00

"""
Response formatters for different content types
"""

import json
import csv
import io
import logging
from typing import Dict, List, Any, Optional, Union
from abc import ABC, abstractmethod

logger = logging.getLogger('api.formatters')

class BaseFormatter(ABC):
    """Base formatter interface"""
    content_type = None
    
    @abstractmethod
    def format(self, data: Any) -> str:
        """Format data to string"""
        pass

class JSONFormatter(BaseFormatter):
    """JSON formatter"""
    content_type = "application/json"
    
    def format(self, data: Any) -> str:
        """Format data to JSON string"""
        return json.dumps(data, ensure_ascii=False, default=str)

class XMLFormatter(BaseFormatter):
    """XML formatter"""
    content_type = "application/xml"
    
    def format(self, data: Any) -> str:
        """Format data to XML string"""
        try:
            import dicttoxml
            xml_data = dicttoxml.dicttoxml(data, custom_root='response', attr_type=False)
            return xml_data.decode('utf-8')
        except ImportError:
            logger.warning("dicttoxml package not installed, falling back to JSON")
            return f"<response><error>XML formatting requires dicttoxml package</error></response>"

class YAMLFormatter(BaseFormatter):
    """YAML formatter"""
    content_type = "application/yaml"
    
    def format(self, data: Any) -> str:
        """Format data to YAML string"""
        try:
            import yaml
            return yaml.dump(data, default_flow_style=False, allow_unicode=True)
        except ImportError:
            logger.warning("PyYAML package not installed, falling back to JSON")
            return "error: YAML formatting requires PyYAML package"

class CSVFormatter(BaseFormatter):
    """CSV formatter"""
    content_type = "text/csv"
    
    def format(self, data: Any) -> str:
        """Format data to CSV string"""
        output = io.StringIO()
        
        # Handle different data types
        if isinstance(data, dict):
            # Single object
            writer = csv.DictWriter(output, fieldnames=data.keys())
            writer.writeheader()
            writer.writerow(data)
        elif isinstance(data, list) and len(data) > 0 and isinstance(data[0], dict):
            # List of objects
            writer = csv.DictWriter(output, fieldnames=data[0].keys())
            writer.writeheader()
            writer.writerows(data)
        else:
            # Fallback for other data types
            output.write("Data cannot be formatted as CSV")
        
        return output.getvalue()

# Registry of formatters
FORMATTERS = {
    "application/json": JSONFormatter(),
    "application/xml": XMLFormatter(),
    "application/yaml": YAMLFormatter(),
    "text/yaml": YAMLFormatter(),  # Alternative MIME type
    "text/csv": CSVFormatter(),
}

def get_formatter_for_content_type(content_type: str) -> Optional[BaseFormatter]:
    """Get formatter for content type"""
    # Handle content type with parameters (e.g. "application/json; charset=utf-8")
    content_type = content_type.split(';')[0].strip()
    
    # Handle accept headers with multiple types and quality values
    # e.g. "application/json, application/xml;q=0.9, */*;q=0.8"
    if ',' in content_type:
        types = []
        for t in content_type.split(','):
            parts = t.strip().split(';')
            mime_type = parts[0].strip()
            q = 1.0
            for param in parts[1:]:
                if param.strip().startswith('q='):
                    try:
                        q = float(param.strip()[2:])
                    except ValueError:
                        pass
            types.append((mime_type, q))
        
        # Sort by quality value
        types.sort(key=lambda x: x[1], reverse=True)
        
        # Try each type in order
        for mime_type, _ in types:
            if mime_type in FORMATTERS:
                return FORMATTERS[mime_type]
            elif mime_type == '*/*':
                return FORMATTERS["application/json"]
        
        # Default to JSON
        return FORMATTERS["application/json"]
    
    # Simple case
    return FORMATTERS.get(content_type, FORMATTERS["application/json"])
