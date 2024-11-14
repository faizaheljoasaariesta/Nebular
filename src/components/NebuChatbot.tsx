import React, { useState } from 'react';
import { ChatDTO, ChatMessage } from '../types/ChatbotDTO';
import { FaRobot, FaUser, FaPaperPlane } from 'react-icons/fa';

interface ChatPageProps {
  initialData: ChatDTO;
}

const NebuChatbot: React.FC<ChatPageProps> = ({ initialData }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialData.messages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      message: newMessage,
      timestamp: new Date().toLocaleTimeString(),
    };

    const aiResponse: ChatMessage = {
      id: `ai-${Date.now() + 1}`,
      sender: 'ai',
      message: 'Here’s some help with that topic. Let me give you an example...',
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, userMessage, aiResponse]);
    setNewMessage('');
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen flex flex-col">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">AI Tutor Interactive Chat</h1>
      
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start mb-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'ai' && (
              <FaRobot className="text-blue-500 mr-2 text-2xl" />
            )}
            <div
              className={`p-3 rounded-lg shadow-sm ${
                msg.sender === 'user' ? 'bg-indigo-500 text-white' : 'bg-white text-gray-800'
              } max-w-xs`}
            >
              <p>{msg.message}</p>
              <span className="text-xs text-gray-400 mt-1 block">{msg.timestamp}</span>
            </div>
            {msg.sender === 'user' && (
              <FaUser className="text-indigo-500 ml-2 text-2xl" />
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center border-t border-gray-200 pt-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-indigo-300"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-indigo-500 text-white p-3 rounded-full shadow-md hover:bg-indigo-600 transition"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default NebuChatbot;
