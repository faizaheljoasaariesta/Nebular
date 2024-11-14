import React from 'react';
import { MarketInsightsDTO, CareerPathDTO } from '../types/CareerPathDTO';
import { FaBriefcase, FaDollarSign, FaProjectDiagram } from 'react-icons/fa';

interface CareerPathProps {
  data: MarketInsightsDTO;
}

const CareerPath: React.FC<CareerPathProps> = ({ data }) => {
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen flex flex-col">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Career Path & Market Insights</h1>

      <div className="grid gap-6">
        {data.careers.map((career: CareerPathDTO) => (
          <div key={career.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-indigo-600 mb-2 flex items-center">
              <FaBriefcase className="mr-2" /> {career.title}
              {career.trending && <span className="ml-2 text-sm text-green-500">(Trending)</span>}
            </h2>
            <p className="text-gray-700 mb-3">{career.description}</p>

            <div className="flex items-center text-gray-600 mb-3">
              <FaDollarSign className="mr-2 text-xl text-yellow-500" />
              <span>Average Salary: {career.averageSalary}</span>
            </div>

            <div className="mb-3">
              <h3 className="text-md font-semibold text-gray-800">Required Skills:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {career.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-md font-semibold text-gray-800">Suggested Projects:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {career.suggestedProjects.map((project, index) => (
                  <li key={index}>
                    <FaProjectDiagram className="inline-block mr-2 text-indigo-400" />
                    {project}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPath;
