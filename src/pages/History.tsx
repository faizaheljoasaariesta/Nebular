import React from 'react';
import Sidebar from '../components/Sidebar';
import StudentProgress from '../components/StudentProgress';
import { StudentProgressDTO } from '../types/StudentProgressDTO';

const History: React.FC = () => {
  const mockStudentProgress: StudentProgressDTO = {
    userId: 'user-123',
    overallProgress: 78,
    projects: [
      {
        id: 'proj-1',
        title: 'Responsive Portfolio Website',
        completionDate: '2024-10-01',
        achievements: 'Completed with excellence',
        skillsDeveloped: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        id: 'proj-2',
        title: 'AI-Based Chatbot',
        completionDate: '2024-11-01',
        achievements: 'Enhanced communication skills',
        skillsDeveloped: ['Python', 'Machine Learning', 'NLP'],
      },
    ],
    skills: [
      { skillName: 'JavaScript', progressPercentage: 85, lastUpdated: '2024-11-10' },
      { skillName: 'React', progressPercentage: 70, lastUpdated: '2024-10-20' },
      { skillName: 'Machine Learning', progressPercentage: 60, lastUpdated: '2024-11-05' },
    ],
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">
        <StudentProgress data={mockStudentProgress} />
      </main>
    </div>
  );
};

export default History;