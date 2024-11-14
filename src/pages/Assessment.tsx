import React from 'react';
import Sidebar from '../components/Sidebar';
import AssessmentPreCourse from '../components/AssessmentPreCourse';
import { AssessmentDTO } from '../types/AssessmentDTO';

const Assessment: React.FC = () => {
  const mockAssessmentData: AssessmentDTO = {
    questions: [
      {
        id: '1',
        questionText: 'What is the capital of France?',
        options: [
          { id: 'a', text: 'Paris', isCorrect: true },
          { id: 'b', text: 'London', isCorrect: false },
          { id: 'c', text: 'Rome', isCorrect: false },
          { id: 'd', text: 'Berlin', isCorrect: false },
        ],
      },
      {
        id: '2',
        questionText: 'Which language is used for web development?',
        options: [
          { id: 'a', text: 'Python', isCorrect: false },
          { id: 'b', text: 'JavaScript', isCorrect: true },
          { id: 'c', text: 'Java', isCorrect: false },
          { id: 'd', text: 'C++', isCorrect: false },
        ],
      },
    ],
    recommendations: [
      { id: '1', to: '/assignment', text: "Let's build project", message: 'Great job! You are ready for the advanced level.' },
      { id: '2', to: '/chatbot', text: "Ask with Nebu now?", message: 'Consider revisiting some basic concepts for a stronger foundation.' },
    ],
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">
        <AssessmentPreCourse data={mockAssessmentData} />;
      </main>
    </div>
  );
};

export default Assessment;