  'use client'
  import React, { useEffect, useRef, useState } from 'react';
  import IssueList from '../../components/page';
  import Layout from '../../layout';
import axios from 'axios';

type Issue = {
  id: number;
  title: string;
  status: 'Open' | 'Closed';
  description: string;
};

const IssuePage: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    const fetchIssues = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/issues');
        if (isMounted.current) {
          setIssues(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch issues:", error);
      }
    };

    fetchIssues();

    return () => {
      isMounted.current = false;  
    };
  }, []);

  return (
    <Layout>
      <IssueList issues={issues} />
    </Layout>
  );
};

export default IssuePage;
