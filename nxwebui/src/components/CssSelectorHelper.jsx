'use client';

import { useEffect, useState, useRef } from 'react';
import { ClipboardIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CssSelectorHelper({ iframe, onSelectorSelected }) {
  const [selector, setSelector] = useState('');
  const [hoveredElement, setHoveredElement] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);
  
  // Initialize selector helper
  useEffect(() => {
    if (!iframe) return;
    
    const iframeDocument = iframe.contentDocument;
    if (!iframeDocument) return;
    
    // Add highlight style
    const style = iframeDocument.createElement('style');
    style.textContent = `
      .__selector_helper_highlight {
        outline: 2px solid red !important;
        background-color: rgba(255, 0, 0, 0.1) !important;
      }
    `;
    iframeDocument.head.appendChild(style);
    
    // Add event listeners
    const handleMouseOver = (e) => {
      if (!isActive) return;
      
      // Remove previous highlight
      if (hoveredElement) {
        hoveredElement.classList.remove('__selector_helper_highlight');
      }
      
      // Add highlight to current element
      e.target.classList.add('__selector_helper_highlight');
      setHoveredElement(e.target);
      
      // Generate selector
      const selector = generateSelector(e.target);
      setSelector(selector);
      
      e.stopPropagation();
    };
    
    const handleClick = (e) => {
      if (!isActive) return;
      
      // Generate selector
      const selector = generateSelector(e.target);
      setSelector(selector);
      
      // Call callback
      if (onSelectorSelected) {
        onSelectorSelected(selector);
      }
      
      e.preventDefault();
      e.stopPropagation();
    };
    
    // Add event listeners to all elements
    const addEventListeners = () => {
      const elements = iframeDocument.querySelectorAll('*');
      elements.forEach(element => {
        element.addEventListener('mouseover', handleMouseOver);
        element.addEventListener('click', handleClick);
      });
    };
    
    // Generate CSS selector for an element
    const generateSelector = (element) => {
      // Simple implementation - can be improved
      if (element.id) {
        return `#${element.id}`;
      }
      
      if (element.className && typeof element.className === 'string') {
        const classes = element.className.trim().split(/\\s+/);
        if (classes.length > 0 && classes[0]) {
          return `.${classes[0]}`;
        }
      }
      
      // Tag name with nth-child
      let selector = element.tagName.toLowerCase();
      let parent = element.parentElement;
      
      if (parent) {
        const siblings = Array.from(parent.children);
        const index = siblings.indexOf(element);
        if (siblings.length > 1) {
          selector += `:nth-child(${index + 1})`;
        }
      }
      
      return selector;
    };
    
    // Initialize
    addEventListeners();
    
    // Cleanup
    return () => {
      try {
        const elements = iframeDocument.querySelectorAll('*');
        elements.forEach(element => {
          element.removeEventListener('mouseover', handleMouseOver);
          element.removeEventListener('click', handleClick);
          element.classList.remove('__selector_helper_highlight');
        });
        
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      } catch (error) {
        console.error('Error cleaning up selector helper:', error);
      }
    };
  }, [iframe, isActive, hoveredElement, onSelectorSelected]);
  
  // Toggle active state
  useEffect(() => {
    setIsActive(true);
    return () => setIsActive(false);
  }, []);
  
  // Copy selector to clipboard
  const copySelector = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand('copy');
    }
  };
  
  // Add selector to editor
  const addToEditor = () => {
    if (onSelectorSelected && selector) {
      onSelectorSelected(selector);
    }
  };
  
  return (
    <div className="absolute top-0 left-0 right-0 z-10 bg-white border-b border-gray-200 p-2 flex items-center space-x-2">
      <input
        ref={inputRef}
        type="text"
        value={selector}
        onChange={(e) => setSelector(e.target.value)}
        className="flex-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="Hover over elements to generate selectors"
      />
      <button
        type="button"
        onClick={copySelector}
        className="inline-flex items-center p-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <ClipboardIcon className="h-5 w-5" aria-hidden="true" />
        <span className="sr-only">Copy selector</span>
      </button>
      <button
        type="button"
        onClick={addToEditor}
        className="inline-flex items-center p-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
        <span className="sr-only">Add to editor</span>
      </button>
    </div>
  );
}
