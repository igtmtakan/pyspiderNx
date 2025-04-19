'use client';

import { useRef, useEffect } from 'react';

// Import monaco configuration
import { configureMonaco } from '@/lib/monaco-config';

export default function MonacoEditor({ language, value, onChange, options = {} }) {
  const editorRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let monacoInstance = null;

    // Load Monaco editor
    const loadMonaco = async () => {
      try {
        // Import monaco dynamically
        monacoInstance = await import('monaco-editor');

        // Configure Monaco
        configureMonaco();

        if (containerRef.current) {
          // Initialize Monaco editor
          editorRef.current = monacoInstance.editor.create(containerRef.current, {
            value,
            language,
            theme: 'vs',
            automaticLayout: true,
            ...options
          });

          // Handle content changes
          editorRef.current.onDidChangeModelContent(() => {
            onChange(editorRef.current.getValue());
          });
        }
      } catch (error) {
        console.error('Error initializing Monaco editor:', error);
      }
    };

    loadMonaco();

    // Cleanup on unmount
    return () => {
      if (editorRef.current) {
        editorRef.current.dispose();
      }
    };
  }, [language, options]);

  // Update editor value when prop changes
  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.getValue()) {
      editorRef.current.setValue(value);
    }
  }, [value]);

  return (
    <div ref={containerRef} className="h-full w-full" />
  );
}
