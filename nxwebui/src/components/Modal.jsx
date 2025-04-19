'use client';

import { Fragment, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      style={{ display: 'block' }}
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        {/* Background overlay */}
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
          style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }}
        ></div>

        {/* Modal panel */}
        <div
          ref={modalRef}
          className="relative bg-white rounded-lg max-w-lg w-full mx-auto shadow-xl z-50"
          onClick={(e) => e.stopPropagation()}
          style={{ position: 'relative', zIndex: 60 }}
        >
          {/* Modal header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-500"
              onClick={onClose}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Close</span>
            </button>
          </div>

          {/* Modal content */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
