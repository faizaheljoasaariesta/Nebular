import React, { useState } from 'react';
import { AssessmentDTO, Option, Recommendation } from '../types/AssessmentDTO';
import { FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface AssessmentPageProps {
  data: AssessmentDTO;
}

const AssessmentPage: React.FC<AssessmentPageProps> = ({ data }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [showRecommendation, setShowRecommendation] = useState(false);

  const currentQuestion = data.questions[currentQuestionIndex];

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    if (option.isCorrect) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestionIndex < data.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowRecommendation(true);
      }
      setSelectedOption(null);
    }, 800);
  };

  const getRecommendation = (): Recommendation => {
    if (score > data.questions.length * 0.7) {
      return data.recommendations[0];
    } else {
      return data.recommendations[1];
    }
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Interactive Pre-Course Assessment</h1>

      {!showRecommendation ? (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-lg font-semibold text-indigo-600 mb-4">
            {currentQuestion.questionText}
          </h2>
          <div className="space-y-3">
            {currentQuestion.options.map((option: Option) => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option)}
                className={`w-full p-3 text-left rounded-lg border ${
                  selectedOption
                    ? option.isCorrect
                      ? 'border-green-500 bg-green-100'
                      : 'border-red-500 bg-red-100'
                    : 'border-gray-300 bg-gray-50 hover:bg-indigo-50'
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4">Your Recommendation</h2>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <FaLightbulb className="text-yellow-500 text-3xl mr-3" />
              <p className="text-gray-700">{getRecommendation().message}</p>
            </div>
            <Link 
              to={getRecommendation().to}
              className="inline-flex items-center bg-indigo-600 text-white py-2 px-4 mt-10 rounded-lg shadow-md hover:bg-indigo-700 transition"
            >
              {getRecommendation().text}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssessmentPage;
