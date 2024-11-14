import React from 'react';
import { PortfolioDTO, Project, Certification, Endorsement } from '../types/PortfolioDTO';
import { FaExternalLinkAlt, FaCertificate, FaUserTie, FaLaptopCode } from 'react-icons/fa';

interface PortfolioPageProps {
  data: PortfolioDTO;
}

const MyPortfolio: React.FC<PortfolioPageProps> = ({ data }) => {
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen flex flex-col">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Portfolio Showcase</h1>

      <section>
        <h2 className="text-xl font-semibold text-indigo-600 mb-3">Projects</h2>
        <div className="space-y-4">
          {data.projects.map((project: Project) => (
            <div key={project.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <FaLaptopCode className="text-indigo-500 text-2xl mr-3" />
                <h3 className="text-lg font-bold">{project.title}</h3>
              </div>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <p className="text-sm text-gray-600 mb-2">
                Technologies: {project.technologies.join(', ')}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 flex items-center"
              >
                View Project <FaExternalLinkAlt className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-indigo-600 mb-3">Certifications</h2>
        <div className="space-y-4">
          {data.certifications.map((cert: Certification) => (
            <div key={cert.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <FaCertificate className="text-indigo-500 text-2xl mr-3" />
                <h3 className="text-lg font-bold">{cert.name}</h3>
              </div>
              <p className="text-gray-600">Issued by: {cert.issuer}</p>
              <p className="text-gray-600 text-sm">Date: {cert.date}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-indigo-600 mb-3">Mentor Endorsements</h2>
        <div className="space-y-4">
          {data.endorsements.map((endorsement: Endorsement) => (
            <div key={endorsement.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <FaUserTie className="text-indigo-500 text-2xl mr-3" />
                <h3 className="text-lg font-bold">{endorsement.mentorName}</h3>
              </div>
              <p className="text-gray-700">{endorsement.message}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyPortfolio;
