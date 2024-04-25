import React from 'react';

interface FeatureProps {
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => (
  <div className="bg-gray-800 text-white p-6 rounded-lg">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const EnhancedProductivity: React.FC = () => (
  <div className="bg-black p-8">
    <h2 className="text-4xl font-bold text-white mb-6">Enhanced Productivity</h2>
    <p className="text-gray-400 mb-8">Optimize team performance with efficient tracking.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Feature  
        title="Delete Issues"
        description="Remove resolved or invalid issues from the tracker easily."
      />
      <Feature
        title="Secure Authentication"
        description="Robust security with user authentication for safe access."
      />
      <Feature
        title="Assign Issues"
        description="Delegate tasks to team members with the assign feature."
      />
      <Feature
        title="Sort and Filter"
        description="Organize issues quickly by priority, date, or status."
      />
    </div>
  </div>
);

export default EnhancedProductivity;