import React from 'react';
import { MentorshipHubDTO, Mentor, Question } from '../types/MentorshipHubDTO';
import { FaUserGraduate, FaQuestionCircle, FaStar } from 'react-icons/fa';

interface MentorshipHubProps {
  data: MentorshipHubDTO;
}

const MentorshipHub: React.FC<MentorshipHubProps> = ({ data }) => {
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen flex flex-col">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Mentorship Hub</h1>

      <div className="grid gap-6">
        <section>
          <h2 className="text-xl font-semibold text-indigo-600 mb-3">Suggested Mentors</h2>
          <div className="space-y-4">
            {data.mentors.map((mentor: Mentor) => (
              <div key={mentor.id} className="bg-white p-4 rounded-lg shadow-md flex items-start">
                <FaUserGraduate className="text-indigo-500 text-2xl mr-3" />
                <div>
                  <h3 className="text-lg font-bold">{mentor.name}</h3>
                  <p className="text-sm text-gray-600">Expertise: {mentor.expertise}</p>
                  <div className="flex items-center text-yellow-500 mt-1">
                    <FaStar />
                    <span className="ml-1 text-gray-700">{mentor.rating.toFixed(1)}</span>
                  </div>
                  <h4 className="text-md font-semibold text-gray-800 mt-2">Available Slots:</h4>
                  <ul className="text-gray-600">
                    {mentor.availableSlots.map((slot, index) => (
                      <li key={index} className="text-sm">{slot}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-indigo-600 mb-3">Q&A Section</h2>
          <div className="space-y-4">
            {data.questions.map((question: Question) => (
              <div key={question.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-start">
                  <FaQuestionCircle className="text-indigo-500 text-2xl mr-3" />
                  <div>
                    <h4 className="font-bold text-gray-800">{question.question}</h4>
                    <p className="text-gray-600 text-sm">Asked by: {question.askedBy}</p>
                    {question.answer ? (
                      <p className="mt-2 text-gray-700">{question.answer}</p>
                    ) : (
                      <p className="mt-2 text-gray-500 italic">No answer yet</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MentorshipHub;
