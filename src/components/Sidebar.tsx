import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaRocket, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { auth } from '../config/firebaseConfig';
import { onAuthStateChanged, User } from 'firebase/auth';

const Sidebar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profilePic, setProfilePic] = useState<string>('/images/defaultUser.png');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setProfilePic(currentUser.photoURL || '/images/defaultUser.png');
      } else {
        setUser(null);
      }
    });

    const handleResize = () => {
      if (window.innerWidth <= 768) setIsSidebarOpen(false);
      else setIsSidebarOpen(true);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const truncateText = (text: string, maxLength: number) =>
    text.length > maxLength ? `${text.substring(0, maxLength)}..` : text;

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const menuItems = [
    { to: '/tools', label: 'Nebular Tools', iconSrc: '/images/tools.png' },
    { to: '/chatbot', label: 'Nebu (ChatBot)', iconSrc: '/images/nebu.png' },
    { to: '/history', label: 'Output History', iconSrc: '/images/history.png' },
  ];

  const personalItems = [
    { to: '/dashboard', label: 'Personalized Dashboard', iconSrc: '/images/dashboard.png' },
    { to: '/mentorship', label: 'Mentorship Hub', iconSrc: '/images/mentorshipHub.png' },
    { to: '/career', label: 'Career Path & Market Insights', iconSrc: '/images/careerPath.png' },
  ];

  return (
    <div className="relative">
      <div className={`w-screen flex justify-end items-center p-4 bg-white shadow-lg ${isSidebarOpen ? 'block md:hidden' : ''}`}>
        <img src="/images/nebular.svg" alt="Nebular Logo" className="w-16 h-8 mr-2" />
        <button className="text-indigo-700 p-2 rounded-full hover:bg-indigo-700 hover:text-white" onClick={toggleSidebar}>
          {isSidebarOpen ? <FaAngleLeft /> : <FaBars />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen bg-white text-black shadow-lg transition-transform duration-200 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } ${isMinimized ? 'w-20' : 'w-72'} ${isSidebarOpen && 'z-50 md:relative md:z-auto'}`}
      >
        <div className={`flex ${isMinimized ? 'justify-center' : 'justify-between'} items-center p-4`}>
          <h2 className={`font-extrabold ${isMinimized ? 'hidden' : 'text-3xl'} text-white tracking-wide`}>
            <img src="/images/nebular.svg" alt="Nebular Logo" className="w-36 rounded-full" />
          </h2>
          <button
            className={`text-indigo-700 p-2 rounded-full hover:bg-indigo-700 hover:text-white ${isSidebarOpen ? 'hidden md:block' : ''}`}
            onClick={() => setIsMinimized(!isMinimized)}
          >
            <FaAngleLeft className={`${isMinimized ? 'rotate-180' : ''} transition-all duration-500`} />
          </button>
        </div>

        {user && (
          <div className="flex items-center p-4 bg-gradient-to-r from-indigo-900 to-purple-800 text-white mb-2">
            <img
              src={profilePic}
              alt="Profile"
              className="w-12 h-12 rounded-full mr-3"
              onError={() => setProfilePic('/images/defaultUser.png')}
            />
            {!isMinimized && (
              <div>
                <p className="font-semibold">{truncateText(user.displayName || "", 28)}</p>
                <p className="text-sm">{truncateText(user.email || "", 28)}</p>
              </div>
            )}
          </div>
        )}

        <hr className="border-t border-indigo-950 my-4 mx-4" />

        <nav className={`flex flex-col flex-grow ${isMinimized ? 'gap-4 px-3' : 'px-4'}`}>
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-4 ${isMinimized ? 'p-2 items-center justify-center rounded-lg' : "p-3 rounded-lg"} mb-2 ${
                  isActive ? 'bg-purple-200 text-purple-600' : 'hover:bg-purple-200 text-gray-600'
                } hover:text-purple-600 hover:shadow-lg transition-all duration-300`
              }
            >
              <img src={item.iconSrc} alt={item.label} className="w-8" />
              <span className={`${isMinimized ? 'hidden' : 'font-normal text-sm'}`}>{item.label}</span>
            </NavLink>
          ))}

          <NavLink
            to="/assessment"
            className={`flex items-center justify-center gap-4 mt-4 ${isMinimized ? 'p-5 rounded-full' : "p-3 rounded-lg"} mb-5 bg-gradient-to-r from-indigo-700 to-purple-700 text-white`}
          >
            <FaRocket />
            <span className={`${isMinimized ? 'hidden' : 'font-normal text-sm'}`}>Let's Try to Smart Learning</span>
          </NavLink>

          {personalItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-4 ${isMinimized ? 'p-2 items-center justify-center rounded-lg' : "p-3 rounded-lg"} mb-2 ${
                  isActive ? 'bg-purple-200 text-purple-600' : 'hover:bg-purple-200 text-gray-600'
                } hover:text-purple-600 hover:shadow-lg transition-all duration-300`
              }
            >
              <img src={item.iconSrc} alt={item.label} className="w-8" />
              <span className={`${isMinimized ? 'hidden' : 'font-normal text-sm'}`}>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
