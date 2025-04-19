'use client';

import { useState, useEffect } from 'react';

export default function SimpleEditor({ language, value, onChange, options = {} }) {
  const [localValue, setLocalValue] = useState(value || '');
  
  // Update local value when prop changes
  useEffect(() => {
    setLocalValue(value || '');
  }, [value]);
  
  // Handle text change
  const handleChange = (e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange(newValue);
  };
  
  return (
    <div className="h-full w-full flex flex-col">
      <div className="bg-gray-100 px-3 py-1 text-xs text-gray-700 border-b">
        {language.toUpperCase()}
      </div>
      <textarea
        value={localValue}
        onChange={handleChange}
        className="flex-1 w-full p-4 font-mono text-sm resize-none focus:outline-none border-0"
        style={{ 
          fontFamily: 'Menlo, Monaco, "Courier New", monospace',
          lineHeight: 1.5,
          tabSize: 2,
          ...options.style
        }}
        readOnly={options.readOnly}
        placeholder={options.placeholder || `Enter ${language} code here...`}
      />
    </div>
  );
}
