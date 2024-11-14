import React from 'react';
import Sidebar from '../components/Sidebar';
import MentorshipHub from '../components/MentorshipHub';
import { MentorshipHubDTO } from '../types/MentorshipHubDTO';

const Mentorship: React.FC = () => {
  const mockMentorshipData: MentorshipHubDTO = {
    mentors: [
      {
        id: '1',
        name: 'Faizahel Joasa Ariesta',
        expertise: 'Web Development',
        rating: 4.8,
        availableSlots: ['Monday 10 AM - 12 PM', 'Wednesday 2 PM - 4 PM'],
      },
      {
        id: '2',
        name: 'Faalezi Joasa Geminik',
        expertise: 'Mobile Development',
        rating: 4.7,
        availableSlots: ['Tuesday 3 PM - 5 PM', 'Thursday 10 AM - 12 PM'],
      },
    ],
    questions: [
      {
        id: 'q1',
        question: 'What is the best way to learn React?',
        askedBy: 'Student123',
        answer: 'Start with the official documentation and build small projects.',
      },
      {
        id: 'q2',
        question: 'How do I deploy my web application?',
        askedBy: 'Student456',
      },
    ],
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">
        <MentorshipHub data={mockMentorshipData} />
      </main>
    </div>
  );
};

export default Mentorship;