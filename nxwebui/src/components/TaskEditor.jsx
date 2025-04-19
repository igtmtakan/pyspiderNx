'use client';

import { useEffect, useState } from 'react';
import ClientMonacoEditor from './ClientMonacoEditor';

export default function TaskEditor({ value, onChange }) {
  const [jsonValue, setJsonValue] = useState('');

  // Convert object to JSON string
  useEffect(() => {
    try {
      // Ensure value is an object
      if (typeof value === 'object' && value !== null) {
        setJsonValue(JSON.stringify(value, null, 2));
      } else if (typeof value === 'string') {
        // If value is already a string, try to parse and re-stringify for formatting
        try {
          const parsed = JSON.parse(value);
          setJsonValue(JSON.stringify(parsed, null, 2));
        } catch (parseError) {
          // If parsing fails, use the string as is
          setJsonValue(value);
        }
      } else {
        // Default empty object
        setJsonValue(JSON.stringify({
          taskid: 'data:,on_start',
          url: 'data:,on_start',
          process: {
            callback: 'on_start',
          },
        }, null, 2));
      }
    } catch (error) {
      console.error('Error stringifying task:', error);
    }
  }, [value]);

  // Handle editor changes
  const handleChange = (newValue) => {
    setJsonValue(newValue);

    try {
      const parsedValue = JSON.parse(newValue);
      onChange(parsedValue);
    } catch (error) {
      // JSON parse errors are ignored to allow for incomplete editing
      console.log('JSON parse error (ignored during editing):', error.message);
    }
  };

  return (
    <ClientMonacoEditor
      language="json"
      value={jsonValue}
      onChange={handleChange}
      options={{
        minimap: { enabled: false },
        lineNumbers: 'on',
        scrollBeyondLastLine: false,
        automaticLayout: true
      }}
    />
  );
}
