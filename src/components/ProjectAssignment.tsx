import React from 'react';
import { ProjectAssignmentDTO, ProjectMilestone } from '../types/ProjectAssignmentDTO';
import { FaCheckCircle, FaRegCircle, FaChalkboardTeacher } from 'react-icons/fa';

interface ProjectAssignmentProps {
  data: ProjectAssignmentDTO;
}

const ProjectAssignment: React.FC<ProjectAssignmentProps> = ({ data }) => {
  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">{data.title}</h1>
      
      <section className="w-full max-w-lg mb-6">
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">Project Goals</h2>
        <ul className="list-disc list-inside text-gray-700">
          {data.goals.map((goal, index) => (
            <li key={index} className="mb-1">{goal}</li>
          ))}
        </ul>
      </section>

      <section className="w-full max-w-lg mb-6">
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700">
          {data.instructions.map((instruction, index) => (
            <li key={index} className="mb-1">{instruction}</li>
          ))}
        </ol>
      </section>

      <section className="w-full max-w-lg mb-6">
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">Project Milestones</h2>
        <ul className="space-y-3">
          {data.milestones.map((milestone: ProjectMilestone) => (
            <li key={milestone.id} className="flex items-center p-3 bg-white rounded-lg shadow">
              {milestone.isCompleted ? (
                <FaCheckCircle className="text-green-500 text-xl mr-3" />
              ) : (
                <FaRegCircle className="text-gray-300 text-xl mr-3" />
              )}
              <div>
                <h3 className="font-semibold text-gray-800">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="w-full max-w-lg mt-4">
        <a
          href={data.aiTutorLink}
          className="flex items-center justify-center p-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-200"
          target="_blank" rel="noopener noreferrer"
        >
          <FaChalkboardTeacher className="text-2xl mr-2" />
          Access AI Tutor
        </a>
      </div>
    </div>
  );
};

export default ProjectAssignment;
