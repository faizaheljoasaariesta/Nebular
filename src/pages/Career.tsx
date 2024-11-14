import React from 'react';
import Sidebar from '../components/Sidebar';
import CareerPath from '../components/CareerPath';
import { MarketInsightsDTO } from '../types/CareerPathDTO'

const Career: React.FC = () => {
  const mockMarketData: MarketInsightsDTO = {
    careers: [
      {
        id: '1',
        title: 'Front-End Developer',
        description: 'Specializes in building the user interface of websites and applications.',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
        averageSalary: '$75,000/year',
        trending: true,
        suggestedProjects: ['Personal Portfolio', 'E-commerce Website', 'Weather App'],
      },
      {
        id: '2',
        title: 'Mobile App Developer',
        description: 'Builds mobile applications for iOS and Android platforms.',
        skills: ['Swift', 'Kotlin', 'React Native', 'UI/UX Design'],
        averageSalary: '$85,000/year',
        trending: true,
        suggestedProjects: ['To-Do List App', 'Social Media App', 'Health Tracking App'],
      },
    ],
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">
        <CareerPath data={mockMarketData} />
      </main>
    </div>
  );
};

export default Career;