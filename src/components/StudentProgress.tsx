import React from 'react';
import { StudentProgressDTO, ProjectProgress, SkillProgress } from '../types/StudentProgressDTO';
import { FaProjectDiagram, FaChartLine } from 'react-icons/fa';

interface StudentProgressProps {
  data: StudentProgressDTO;
}

const StudentProgress: React.FC<StudentProgressProps> = ({ data }) => {
  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Student Progress Overview</h1>
      
      <section className="w-full max-w-lg mb-6">
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">Overall Progress</h2>
        <div className="flex items-center">
          <FaChartLine className="text-indigo-500 text-2xl mr-3" />
          <span className="text-lg font-semibold text-gray-700">{data.overallProgress}%</span>
        </div>
      </section>

      <section className="w-full max-w-lg mb-6">
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">Completed Projects</h2>
        <ul className="space-y-4">
          {data.projects.map((project: ProjectProgress) => (
            <li key={project.id} className="p-4 bg-white rounded-lg shadow flex items-start">
              <FaProjectDiagram className="text-indigo-500 text-2xl mr-3" />
              <div>
                <h3 className="font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600">Completed on: {project.completionDate}</p>
                <p className="text-gray-600">Achievements: {project.achievements}</p>
                <ul className="mt-2 text-gray-700">
                  {project.skillsDeveloped.map((skill, index) => (
                    <li key={index} className="inline-block mr-2 bg-gray-200 rounded-full px-2 py-1 text-sm">{skill}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="w-full max-w-lg mb-6">
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">Skill Development</h2>
        <ul className="space-y-4">
          {data.skills.map((skill: SkillProgress) => (
            <li key={skill.skillName} className="p-4 bg-white rounded-lg shadow flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800">{skill.skillName}</h3>
                <p className="text-gray-600">Last Updated: {skill.lastUpdated}</p>
              </div>
              <span className="text-lg font-semibold text-gray-700">{skill.progressPercentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default StudentProgress;
