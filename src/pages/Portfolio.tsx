import React from 'react';
import Sidebar from '../components/Sidebar';
import MyPortfolio from '../components/MyPortfolio';
import { PortfolioDTO } from '../types/PortfolioDTO';

const Portfolio: React.FC = () => {
  const mockPortfolioData: PortfolioDTO = {
    projects: [
      {
        id: '1',
        title: 'E-commerce Website',
        description: 'A full-stack e-commerce website with a React frontend and Node.js backend.',
        technologies: ['React', 'Node.js', 'MongoDB'],
        link: 'https://example.com',
      },
      {
        id: '2',
        title: 'Portfolio Website',
        description: 'A personal portfolio website to showcase my projects and achievements.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://example.com',
      },
    ],
    certifications: [
      {
        id: '1',
        name: 'Full-Stack Web Development',
        issuer: 'Coursera',
        date: '2024-01-20',
      },
      {
        id: '2',
        name: 'Data Science Essentials',
        issuer: 'edX',
        date: '2023-12-15',
      },
    ],
    endorsements: [
      {
        id: '1',
        mentorName: 'John Doe',
        message: 'An exceptional developer with a keen eye for design and functionality.',
      },
      {
        id: '2',
        mentorName: 'Jane Smith',
        message: 'Outstanding project management and coding skills.',
      },
    ],
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">
        <MyPortfolio data={mockPortfolioData} />;
      </main>
    </div>
  );
};

export default Portfolio;