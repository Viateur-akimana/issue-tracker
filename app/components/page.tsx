import React, { useState } from 'react';
import Link from 'next/link';

type Issue = {
  id: number;
  title: string;
  status: 'Open' | 'Closed';
  description: string;
};

interface IssueListProps {
  issues: Issue[];
}

const IssueList: React.FC<IssueListProps> = ({ issues }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<keyof Issue | ''>('');

  const filteredAndSortedIssues = issues.filter(issue =>
    issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    issue.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    issue.status.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    if (sortBy === '') return 0;
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Filter Issues..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="bg-gray-800 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 border-none"
        />
        <select
          className="bg-gray-800 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 border-none"
          value={sortBy}
          onChange={e => setSortBy(e.target.value as keyof Issue)}
        >
          <option value="">Sort by</option>
          <option value="id">ID</option>
          <option value="title">Title</option>
          <option value="status">Status</option>
          <option value="description">Description</option>
        </select>
      </div>
      <table className="w-full table-auto border-collapse border">
        <thead>
          <tr className="bg-gray-800 text-white border-b">
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedIssues.map(issue => (
            <tr key={issue.id} className="hover:bg-gray-800 text-center border-b">
              <td className="px-4 py-2">{issue.title}</td>
              <td className="px-4 py-2">
                <span className={`px-2 py-1 rounded-md`}>
                  {issue.status}
                </span>
              </td>
              <td className="px-4 py-2">{issue.description}</td>
              <td className="px-4 py-2 space-x-2">
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-10">
        <Link href="/issues/new" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-1/ text-center block">
            New Issue
        </Link>
      </div>
    </div>
  );
};

export default IssueList;
