import React from 'react';
import Sidebar from '../components/Sidebar';
import ProjectAssignment from '../components/ProjectAssignment';
import { ProjectAssignmentDTO } from '../types/ProjectAssignmentDTO';

const Assignment: React.FC = () => {
  const mockProjectData: ProjectAssignmentDTO = {
    projectId: 'proj-123',
    title: 'Build a Responsive Portfolio Website',
    goals: [
      'Create a personal portfolio website that is fully responsive.',
      'Showcase completed projects, skills, and achievements.',
      'Implement accessibility and mobile-friendly design practices.',
    ],
    instructions: [
      'Set up the project structure and install necessary dependencies.',
      'Design and develop the homepage with an introduction and navigation.',
      'Add sections for projects, skills, and contact information.',
      'Optimize the website for various screen sizes and accessibility.',
    ],
    milestones: [
      { id: 'm1', title: 'Setup Project', description: 'Initialize project and setup basic structure.', isCompleted: true },
      { id: 'm2', title: 'Develop Homepage', description: 'Create an engaging homepage layout.', isCompleted: true },
      { id: 'm3', title: 'Add Projects Section', description: 'Showcase your projects with details.', isCompleted: false },
      { id: 'm4', title: 'Optimize Responsiveness', description: 'Ensure the site looks good on all devices.', isCompleted: false },
    ],
    aiTutorLink: 'https://tutor.example.com/ai-assistance',
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">
        <ProjectAssignment data={mockProjectData} />
      </main>
    </div>
  );
};

export default Assignment;