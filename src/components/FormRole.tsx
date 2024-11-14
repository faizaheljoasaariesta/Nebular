import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FormRole: React.FC = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role: string) => {
    localStorage.setItem('userRole', role);
    navigate('/login');
  };
  
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2 md:gap-10 p-4 md:p-8">
      <div className="flex justify-center items-center">
        <img
          src="/images/nebular.svg"
          alt="Profile"
          className="w-36 md:w-72"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="p-6 md:p-8 rounded-xl w-full max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 md:mb-6 text-indigo-900">I will be using Nebular Assistant as:</h2>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10">
            <div className="w-full md:w-auto" onClick={() => handleRoleSelect('student')}>
              <div className="flex flex-col gap-4 md:gap-6 justify-center items-center p-8 md:p-14 bg-gradient-to-b from-gray-800 to-indigo-950 hover:bg-gradient-to-b hover:from-gray-950 hover:to-indigo-950 hover:shadow-[0_0_15px_2px_rgba(76,41,141,141)] duration-300 rounded-xl cursor-pointer">
                <img
                  src="/images/students.png"
                  alt="Profile"
                  className="w-24 h-24 md:w-36 md:h-36"
                />
                <div className="flex flex-col w-full justify-center items-center">
                  <h1 className="text-white text-lg md:text-xl font-bold">A Student</h1>
                  <p className="text-white text-xs md:text-sm">(Under age 18)</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-auto" onClick={() => handleRoleSelect('educator')}>
              <div className="flex flex-col gap-4 md:gap-6 justify-center items-center p-8 md:p-14 bg-gray-50 hover:bg-gray-200 rounded-xl border border-gray-300 duration-300 cursor-pointer">
                <img
                  src="/images/teacher.png"
                  alt="Profile"
                  className="w-24 h-24 md:w-36 md:h-36"
                />
                <div className="flex flex-col w-full justify-center items-center">
                  <h1 className="text-gray-800 text-lg md:text-xl font-bold">An Educator</h1>
                  <p className="text-gray-800 text-xs md:text-sm">(Age 18+)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-6 text-center">
            <p className="text-xs md:text-sm text-gray-500">
              By continuing, you consent to the{' '}
              <Link to="/register" className="text-indigo-600 hover:underline">
                privacy policy
              </Link>
              {' '} and {' '}
              <Link to="/register" className="text-indigo-600 hover:underline">
                terms of service.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRole;
