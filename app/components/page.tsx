import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Modal from './Modal'; 
import Link from 'next/link';
import { Button } from '@radix-ui/themes';

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
  const [currentIssues, setIssues] = useState<Issue[]>(issues);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentIssue, setCurrentIssue] = useState<Issue | null>(null);

  const router = useRouter();

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

  const handleEdit = async () => {
    if (currentIssue) {
      try {
        await axios.put(`http://localhost:3000/api/issues/${currentIssue.id}`, currentIssue);
        setEditModalOpen(false); 
        router.refresh();
      } catch (error) {
        console.error('Failed to update the issue:', error);
      }
    }
  };

  const handleDelete = async (id: number) => {
    setDeleteModalOpen(false); 
    try {
      await axios.delete(`http://localhost:3000/api/issues/${id}`);
      setIssues(currentIssues => currentIssues.filter(issue => issue.id !== id));
      router.refresh(); 
    } catch (error) {
      console.error('Error deleting issue:', error);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen p-4 text-center">
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
                <button onClick={() => { setCurrentIssue(issue); setEditModalOpen(true); }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                  Edit
                </button>
                <button onClick={() => { setCurrentIssue(issue); setDeleteModalOpen(true); }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editModalOpen && currentIssue && (
        <Modal modalOpen={editModalOpen} setModalOpen={setEditModalOpen}>
          <form onSubmit={(e) => { e.preventDefault(); handleEdit(); }}>
            <h3>Edit Issue</h3>
            <div>
              <label>Title:</label>
              <input type="text" value={currentIssue.title} onChange={(e) => setCurrentIssue({...currentIssue, title: e.target.value})} className="input bg-black border input-bordered w-full max-w-xs" />
            </div>
            <div>
              <label className="bg-black">Status:</label>
              <select value={currentIssue.status} onChange={(e) => setCurrentIssue({...currentIssue, status: e.target.value as 'Open' | 'Closed'})} className="select bg-black border select-bordered w-full max-w-xs">
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
            <div>
              <label>Description:</label>
              <textarea value={currentIssue.description} onChange={(e) => setCurrentIssue({...currentIssue, description: e.target.value})} className="textarea bg-black bordeer textarea-bordered w-full max-w-xs" />
            </div>
            <button type="submit" className="btn btn-primary border">Update</button>
          </form>
        </Modal>
      )}
      {deleteModalOpen && currentIssue && (
        <Modal modalOpen={deleteModalOpen} setModalOpen={setDeleteModalOpen}>
          <h3>Are you sure you want to delete this issue?</h3>
          <button onClick={() => handleDelete(currentIssue.id)} className="btn btn-error">Delete</button>
          <button onClick={() => setDeleteModalOpen(false)} className="btn btn-ghost">Cancel</button>
        </Modal>
      )}
       <Button
          className="bg-purple-500 item-center my-5 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit new issue
        </Button>
    </div>
  );
};

export default IssueList;
