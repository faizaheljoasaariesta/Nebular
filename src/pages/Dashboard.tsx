import React from 'react';
import Sidebar from '../components/Sidebar';
import PersonalizedDashboard from '../components/PersonalizedDashboard';
import { DashboardDTO } from '../types/DashboardDTO';

const Dashboard: React.FC = () => {
  const mockData: DashboardDTO = {
    progress: [
      { title: 'Web Development Course', percentage: 80 },
      { title: 'UI/UX Design Basics', percentage: 40 },
    ],
    recommendedCourses: [
      { title: 'Advanced React', deadline: '2024-11-30' },
      { title: 'Tailwind CSS Deep Dive', deadline: '2024-12-15' },
    ],
    achievements: [
      { title: 'Completed JavaScript Basics', date: '2024-10-01' },
      { title: 'UI/UX Design Certification', date: '2024-09-15' },
    ],
    portfolioUrl: '/portfolio',
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">
        <PersonalizedDashboard data={mockData} />
      </main>
    </div>
  );
};

export default Dashboard;
