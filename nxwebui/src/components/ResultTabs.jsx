'use client';

import { useEffect, useRef, useState } from 'react';
import CssSelectorHelper from './CssSelectorHelper';
import ClientMonacoEditor from './ClientMonacoEditor';

export default function ResultTabs({ result, activeTab, selectorHelperEnabled, onSelectorSelected }) {
  const iframeRef = useRef(null);
  const [htmlContent, setHtmlContent] = useState('');

  // Update iframe content when result changes
  useEffect(() => {
    if (result && activeTab === 'web' && iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      doc.open();
      doc.write(result.fetch_result.content);
      doc.close();

      // Set HTML content for HTML tab
      setHtmlContent(result.fetch_result.content);
    }
  }, [result, activeTab]);

  if (!result) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Run a task to see results</p>
      </div>
    );
  }

  return (
    <div className="h-full overflow-auto">
      {activeTab === 'web' && (
        <div className="h-full relative">
          {selectorHelperEnabled && (
            <CssSelectorHelper
              iframe={iframeRef.current}
              onSelectorSelected={onSelectorSelected}
            />
          )}
          <iframe
            ref={iframeRef}
            className="w-full h-full border-0"
            sandbox="allow-same-origin allow-scripts"
            title="Web Preview"
          />
        </div>
      )}

      {activeTab === 'html' && (
        <div className="h-full">
          <ClientMonacoEditor
            language="html"
            value={htmlContent}
            onChange={() => {}} // Read-only
            options={{
              readOnly: true,
              minimap: { enabled: false },
              lineNumbers: 'on',
              scrollBeyondLastLine: false,
              automaticLayout: true
            }}
          />
        </div>
      )}

      {activeTab === 'follows' && (
        <div className="p-4">
          {result.follows && result.follows.length > 0 ? (
            <div className="space-y-4">
              {result.follows.map((follow, index) => (
                <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg border border-gray-200">
                  <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                    <div>
                      <span className="font-medium text-gray-900">{follow.process?.callback || 'callback'}</span>
                      <span className="mx-2 text-gray-500">&gt;</span>
                      <span className="text-gray-900">{follow.url}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => {
                          // Handle run follow
                        }}
                      >
                        Run
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => {
                          // Handle show details
                        }}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-500">No follows found</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'messages' && (
        <div className="p-4">
          {result.messages && result.messages.length > 0 ? (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg border border-gray-200">
              <div className="px-4 py-5 sm:p-6">
                <pre className="text-sm text-gray-900 whitespace-pre-wrap">
                  {JSON.stringify(result.messages, null, 2)}
                </pre>
              </div>
            </div>
          ) : (
            <div className="text-center py-10 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-500">No messages found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
