import React from 'react';
import IssueList from './page';
import Layout from '../../layout'


const mockIssues = [
  { id: 1, title: 'Example Issue 1', status: 'Open', assignee: 'John Doe' },
  { id: 2, title: 'Example Issue 2', status: 'Closed', assignee: 'Jane Smith' },
  { id: 2, title: 'Example Issue 3', status: 'Closed', assignee: 'Viateur Salton' },
];

const HomePage = () => (
  <Layout>
    <IssueList issues={mockIssues} />
  </Layout>
);

export default HomePage;