'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useRouter} from 'next/navigation'

type Issue = {
  id: number;
  title: string;
  status: 'Open' | 'Closed';
  description: string;
};

interface EditIssueProps {
  issue?: Issue;
}

const EditIssue: React.FC<EditIssueProps> = ({ issue }) => {
 
  const [title, setTitle] = useState(issue?.title || '');
  const [status, setStatus] = useState<'Open' | 'Closed'>(issue?.status || 'Open');
  const [description, setDescription] = useState(issue?.description || '');

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!issue) {
      console.error('Issue is not provided');
      return;
    }

    try {
      await axios.put(`/api/issues/${issue.id}`, { title, status, description });
      router.push('/issues/issueList');
    } catch (error) {
      console.error('Failed to update the issue:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium ">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="status" className="block text-sm font-medium  bg-black">
          Status
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as 'Open' | 'Closed')}
          className="mt-1 block w-full px-3 py-2 border bg-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description 
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">
        Update Issue
      </button>
    </form>
  );
};

export default EditIssue;
