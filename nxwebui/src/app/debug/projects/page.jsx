'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeftIcon,
  PlusIcon,
  FolderIcon,
  ClockIcon,
  TrashIcon,
  PencilIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
  PlayIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import axios from 'axios';
import Modal from '@/components/Modal';

export default function DebugProjects() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [pyspiderProjects, setPyspiderProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pyspiderLoading, setPyspiderLoading] = useState(true);
  const [error, setError] = useState('');
  const [pyspiderError, setPyspiderError] = useState('');
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectStartUrl, setNewProjectStartUrl] = useState('');
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    fetchProjects();
    fetchPyspiderProjects();

    // Set up interval to refresh projects list every 30 seconds
    const projectsIntervalId = setInterval(fetchProjects, 30000);
    const pyspiderIntervalId = setInterval(fetchPyspiderProjects, 30000);

    // Clean up interval on unmount
    return () => {
      clearInterval(projectsIntervalId);
      clearInterval(pyspiderIntervalId);
    };
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError('');

      console.log('Fetching debug projects from API...');
      const response = await axios.get('/api/debug/projects', {
        timeout: 10000, // 10 seconds timeout
        retry: 3, // Retry 3 times
        retryDelay: 1000 // 1 second delay between retries
      });
      console.log('Debug projects response:', response.data);
      setProjects(response.data || []);

      setLoading(false);
    } catch (error) {
      console.error('Error fetching debug projects:', error);
      // Handle network errors gracefully
      if (error.message === 'Network Error') {
        setError('Network error: Please check your connection and try again');
      } else {
        setError(error.response?.data?.error || 'Failed to fetch debug projects');
      }
      setProjects([]); // Set empty array on error
      setLoading(false);
    }
  };

  const fetchPyspiderProjects = async () => {
    try {
      setPyspiderLoading(true);
      setPyspiderError('');

      console.log('Fetching PySpider projects...');
      const response = await axios.get('/api/pyspider/projects', {
        timeout: 10000, // 10 seconds timeout
      });
      console.log('PySpider projects response:', response.data);

      if (response.data && response.data.projects) {
        setPyspiderProjects(response.data.projects || []);
      } else {
        setPyspiderProjects([]);
      }

      setPyspiderLoading(false);
    } catch (error) {
      console.error('Error fetching PySpider projects:', error);
      // Handle network errors gracefully
      if (error.message === 'Network Error') {
        setPyspiderError('Network error: Cannot connect to PySpider');
      } else {
        setPyspiderError(error.response?.data?.error || 'Failed to fetch PySpider projects');
      }
      setPyspiderProjects([]); // Set empty array on error
      setPyspiderLoading(false);
    }
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!newProjectName.trim()) {
      setError('Project name is required');
      return;
    }

    try {
      setCreating(true);
      setError('');

      console.log('Creating new project:', newProjectName);
      const response = await axios.post('/api/debug/projects', {
        name: newProjectName,
        startUrl: newProjectStartUrl
      });

      console.log('Project created successfully:', response.data);
      setProjects([...projects, response.data]);
      closeModal();

      // Redirect to the new project's debug page
      router.push(`/debug/projects/${response.data.name}`);
    } catch (error) {
      console.error('Error creating debug project:', error);
      setError(error.response?.data?.error || 'Failed to create debug project');
      setCreating(false);
    }
  };

  // Function to close modal and reset form
  const closeModal = useCallback(() => {
    console.log('Closing modal');
    setShowNewProjectModal(false);
    setNewProjectName('');
    setNewProjectStartUrl('');
    setCreating(false);
  }, []);

  const handleDeleteProject = async (projectId, projectName) => {
    if (window.confirm(`Are you sure you want to delete the project "${projectName}"? This action cannot be undone.`)) {
      try {
        setLoading(true);
        setError('');

        await axios.delete(`/api/debug/projects/${projectId}`);

        setProjects(projects.filter(project => project.id !== projectId));

        setLoading(false);
      } catch (error) {
        console.error('Error deleting debug project:', error);
        setError(error.response?.data?.error || 'Failed to delete debug project');
        setLoading(false);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/debug"
            className="inline-flex items-center mr-4 text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ArrowLeftIcon className="mr-1 h-5 w-5" aria-hidden="true" />
            Back to Debug Tools
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900">Debug Projects</h1>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            // Reset form state before showing modal
            setNewProjectName('');
            setNewProjectStartUrl('');
            setError('');
            console.log('Opening modal');
            setShowNewProjectModal(true);
            console.log('Modal state after setting:', true);
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          New Project
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{error}</h3>
            </div>
          </div>
        </div>
      )}

      {/* NxWebUI Debug Projects */}
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Your Debug Projects</h2>

          {loading && projects.length === 0 ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-10 bg-gray-50 rounded-md">
              <FolderIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No projects</h3>
              <p className="mt-1 text-sm text-gray-500">
                Get started by creating a new debug project.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    // Reset form state before showing modal
                    setNewProjectName('');
                    setNewProjectStartUrl('');
                    setError('');
                    setShowNewProjectModal(true);
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  New Project
                </button>
              </div>
            </div>
          ) : (
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Created
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Last Updated
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {projects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <Link href={`/debug/projects/${project.name}`} className="text-indigo-600 hover:text-indigo-900">
                          {project.name}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <ClockIcon className="mr-1.5 h-5 w-5 text-gray-400" />
                          {new Date(project.createdAt).toLocaleString()}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {new Date(project.updatedAt).toLocaleString()}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <div className="flex justify-end space-x-2">
                          <Link
                            href={`/debug/projects/${project.name}`}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <PencilIcon className="h-5 w-5" aria-hidden="true" />
                            <span className="sr-only">Edit {project.name}</span>
                          </Link>
                          <button
                            onClick={() => handleDeleteProject(project.id, project.name)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <TrashIcon className="h-5 w-5" aria-hidden="true" />
                            <span className="sr-only">Delete {project.name}</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* PySpider Projects */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">PySpider Projects</h2>

          {pyspiderError && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <ExclamationCircleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">{pyspiderError}</h3>
                </div>
              </div>
            </div>
          )}

          {pyspiderLoading && pyspiderProjects.length === 0 ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : pyspiderProjects.length === 0 ? (
            <div className="text-center py-10 bg-gray-50 rounded-md">
              <FolderIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No PySpider projects found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Create a project in PySpider or check your connection to PySpider.
              </p>
            </div>
          ) : (
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Group
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Rate/Burst
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {pyspiderProjects.map((project) => (
                    <tr key={project.name} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <Link
                          href={`/debug/projects/${project.name}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          {project.name}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          project.status === 'RUNNING' ? 'bg-green-100 text-green-800' :
                          project.status === 'PAUSED' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {project.group || '-'}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {project.rate}/{project.burst}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <div className="flex justify-end space-x-2">
                          <a
                            href={`http://localhost:5000/debug/${project.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <DocumentTextIcon className="h-5 w-5" aria-hidden="true" />
                            <span className="sr-only">PySpider Debug {project.name}</span>
                          </a>
                          <Link
                            href={`/debug/projects/${project.name}`}
                            className="text-green-600 hover:text-green-900"
                          >
                            <PlayIcon className="h-5 w-5" aria-hidden="true" />
                            <span className="sr-only">Debug {project.name}</span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* New Project Modal */}
      <Modal
        isOpen={showNewProjectModal}
        onClose={closeModal}
        title="Create New Debug Project"
      >
        <form onSubmit={handleCreateProject}>
          <div className="mb-4">
            <label htmlFor="project-name" className="block text-sm font-medium text-gray-700 text-left">
              Project Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="mt-1 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="start-url" className="block text-sm font-medium text-gray-700 text-left">
              Start URL
            </label>
            <input
              type="text"
              name="start-url"
              id="start-url"
              className="mt-1 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
              value={newProjectStartUrl}
              onChange={(e) => setNewProjectStartUrl(e.target.value)}
              placeholder="https://example.com"
            />
            <p className="mt-1 text-sm text-gray-500 text-left">
              Optional: URL to start scraping from
            </p>
          </div>
          <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <button
              type="submit"
              disabled={creating}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
            >
              {creating ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating...
                </>
              ) : (
                'Create'
              )}
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                closeModal();
              }}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
