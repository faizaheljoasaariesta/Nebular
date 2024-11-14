import React from 'react';
import { DashboardDTO } from '../types/DashboardDTO';
import { FaBook, FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsBarChartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface PersonalizedDashboardProps {
  data: DashboardDTO;
}

const PersonalizedDashboard: React.FC<PersonalizedDashboardProps> = ({ data }) => {
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Personalized Dashboard</h1>
      
      <section className="mb-6">
        <h2 className="text-lg font-medium text-gray-700 mb-2 flex items-center">
          <BsBarChartFill className="mr-2 text-indigo-600" /> Your Progress
        </h2>
        <div className="space-y-4">
          {data.progress.map((item, index) => (
            <div key={index} className="bg-white shadow-sm p-4 rounded-lg">
              <p className="text-gray-800">{item.title}</p>
              <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                <div
                  className="bg-indigo-500 h-3 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">{item.percentage}% completed</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-medium text-gray-700 mb-2 flex items-center">
          <FaBook className="mr-2 text-green-600" /> Recommended Courses
        </h2>
        <div className="space-y-4">
          {data.recommendedCourses.map((course, index) => (
            <div key={index} className="bg-white shadow-sm p-4 rounded-lg flex items-center justify-between">
              <p className="text-gray-800">{course.title}</p>
              <div className="text-gray-500 flex items-center">
                <AiOutlineClockCircle className="mr-1" />
                <span className="text-sm">{course.deadline}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-medium text-gray-700 mb-2 flex items-center">
          <FaAward className="mr-2 text-yellow-600" /> Achievements
        </h2>
        <div className="space-y-4">
          {data.achievements.map((achievement, index) => (
            <div key={index} className="bg-white shadow-sm p-4 rounded-lg">
              <p className="text-gray-800">{achievement.title}</p>
              <p className="text-sm text-gray-500">{achievement.date}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 text-center">
        {/* <a
          href={data.portfolioUrl}
          className="inline-flex items-center bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExternalLinkAlt className="mr-2" />
          Quick Access to Portfolio
        </a> */}

        <Link 
          to={data.portfolioUrl}
          className="inline-flex items-center bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          <FaExternalLinkAlt className="mr-2" />
          Quick Access to Portfolio
        </Link>
      </section>
    </div>
  );
};

export default PersonalizedDashboard;
