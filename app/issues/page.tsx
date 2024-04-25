'use client'

import React, { useState } from 'react';
import { Button } from '@radix-ui/themes';
import Link from 'next/link'

type Issue = {
  id: number;
  title: string;
  status: 'Open' | 'Closed';
  assignee: string;
};

type IssueListProps = {
  issues: Issue[];
};

const IssueList = ({ issues }: IssueListProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIssues = issues.filter(issue =>
    issue.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Filter Issues..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="bg-gray-800 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 border"
        />
        <select
          className="bg-gray-800 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 border"
        >
          <option>Sort by</option>
          <option>ID</option>
          <option>Title</option>
          <option>Status</option>
          <option>Assignee</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-800 text-white border">
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Assignee</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredIssues.map(issue => (
              <tr key={issue.id} className="hover:bg-gray-800 text-center border">
                <td className="px-2 py-2 ">{issue.title}</td>
                <td className="px-2 py-2">
                  <span
                    className={`px-2 py-1 rounded-md ${
                      issue.status === 'Open'
                        ? 'text-purple-500'
                        : 'text-red-700 '
                    }`}
                  >
                    {issue.status}
                  </span>
                </td>
                <td className="px-4 py-2">{issue.assignee}</td>
                <td className="px-4 py-2">
                  <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex justify-center mt-10'><Button><Link href={'/api/issues/new'} className='bg-purple-500 text-white item-center font-bold py-2 px-4 rounded w-48' >New issue</Link> </Button></div>
      </div>
    </div>
  );
};

export default IssueList;