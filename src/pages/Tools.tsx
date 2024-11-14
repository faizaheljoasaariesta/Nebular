import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import CardMenu from '../components/CardMenu';
import { MenuItem } from '../types/MenuToolsDTO';

const Tools: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      iconSrc: '/images/projectGenerated.png',
      title: 'AI-Driven Project Generation',
      description: 'Dynamically creates real-world projects based on industry trends and individual progress, ensuring students gain relevant skills.',
    },
    {
      id: 2,
      iconSrc: '/images/learningPath.png',
      title: 'Adaptive Learning Paths',
      description: "AI personalizes the learning journey to meet each student's unique needs and career goals.",
    },
    {
      id: 3,
      iconSrc: '/images/marketInsight.png',
      title: 'Real-Time Market Insights',
      description: 'Analyzes job market data to keep learning paths aligned with in-demand skills and emerging roles.',
    },
    {
      id: 4,
      iconSrc: '/images/assessment.png',
      title: 'Automated Assessment and Feedback',
      description: 'Provides instant, AI-driven feedback on student projects, enabling continuous improvement.',
    },
    {
      id: 5,
      iconSrc: '/images/portofolio.png',
      title: 'Portfolio Building',
      description: 'Automatically compiles completed projects into a digital portfolio, allowing students to showcase verified, job-ready skills.',
    },
    {
      id: 6,
      iconSrc: '/images/mentorshipMatching.png',
      title: 'Mentorship Matching',
      description: 'Uses AI to connect students with mentors who align with their career focus, maximizing the relevance and value of mentorship sessions.',
    },
  ];

  const [favorites, setFavorites] = useState<MenuItem[]>([]);
  const [recommended, setRecommended] = useState<MenuItem[]>(menuItems);

  const toggleFavorite = (itemId: number) => {
    const isFavorite = favorites.find(item => item.id === itemId);
    
    if (isFavorite) {
      setFavorites(favorites.filter(item => item.id !== itemId));
      setRecommended([...recommended, isFavorite]);
    } else {
      const itemToFavorite = recommended.find(item => item.id === itemId);
      if (itemToFavorite) {
        setFavorites([...favorites, itemToFavorite]);
        setRecommended(recommended.filter(item => item.id !== itemId));
      }
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">
        <div className="min-h-screen bg-gray-50 p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Favorites</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {favorites.length > 0 ? (
              favorites.map((item) => (
                <CardMenu
                  id={item.id}
                  iconSrc={item.iconSrc}
                  title={item.title}
                  description={item.description}
                  isFavorite={true}
                  onFavoriteToggle={() => toggleFavorite(item.id)}
                />
              ))
            ) : (
              <div className="flex items-center p-4 bg-gray-100 rounded-lg border border-dashed border-gray-300">
                <div className="mr-4 text-2xl text-gray-400">✨</div>
                <div>
                  <h2 className="font-semibold text-gray-500">Your favorite tools appear here!</h2>
                  <p className="text-gray-400 text-sm">Click the star on any tool to add it to your favorites.</p>
                </div>
                <div className="ml-auto text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                    <path d="M8 1l2.45 4.95L15 6l-3.6 3.5L12 15 8 12.5 4 15l1.6-5.5L2 6l4.55-.05L8 1z" />
                  </svg>
                </div>
              </div>
            )}
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-6">Recommended For You</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommended.map((item) => (
              <CardMenu
                id={item.id}
                iconSrc={item.iconSrc}
                title={item.title}
                description={item.description}
                isFavorite={false}
                onFavoriteToggle={() => toggleFavorite(item.id)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tools;