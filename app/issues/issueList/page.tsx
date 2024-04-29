'use client'
import React from 'react';
import IssueList from '../../components/issueList';
import Layout from '../../layout';
import { GetServerSideProps } from 'next';

type Issue = {
  id: number;
  title: string;
  status: 'Open' | 'Closed';
  assignee: string;
};

type HomePageProps = {
  issues: Issue[];
};

const HomePage: React.FC<HomePageProps> = ({ issues }) => (
  <Layout>
    <IssueList issues={issues} />
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/issues'); // Use the correct URL for your environment
  const issues: Issue[] = await res.json();

  return {
    props: {
      issues,
    },
  };
};

export default HomePage;
