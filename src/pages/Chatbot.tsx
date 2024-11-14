import React from 'react';
import Sidebar from '../components/Sidebar';
import NebuChatbot from '../components/NebuChatbot';
import { ChatDTO } from '../types/ChatbotDTO';

const mockChatData: ChatDTO = {
  messages: [
    {
      id: 'ai-1',
      sender: 'ai',
      message: 'Hello! I’m here to help you with your tasks. What would you like to learn about?',
      timestamp: '10:30 AM',
    },
    {
      id: 'user-1',
      sender: 'user',
      message: 'Can you help me understand React components?',
      timestamp: '10:32 AM',
    },
    {
      id: 'ai-2',
      sender: 'ai',
      message: 'Sure! React components are the building blocks of any React application...',
      timestamp: '10:33 AM',
    },
  ],
};

const Chatbot: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">
        <NebuChatbot initialData={mockChatData} />
      </main>
    </div>
  );
};

export default Chatbot;
