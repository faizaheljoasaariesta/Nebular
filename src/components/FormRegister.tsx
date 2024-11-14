import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

const FormRegister: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole') || 'student';
    setRole(storedRole.charAt(0).toUpperCase() + storedRole.slice(1));
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        role: role.toLowerCase(),
        createdAt: new Date(),
      });

      navigate('/dashboard');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
        console.error('Registration error:', error.message);
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  return (
    <div className="w-full flex flex-col gap-10 items-center">
      <div className='flex justify-center items-center'>
        <img
          src="/images/nebular.svg"
          alt="Profile"
          className="w-48 h-12 rounded-full mr-3"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="p-8 rounded-xl w-96 max-w-sm">
          <h2 className="text-3xl font-semibold text-center mb-6 text-indigo-900">
            {role} Sign Up
          </h2>
          
          {error && <p className="text-red-400 text-center mb-4">{error}</p>}
          
          <form onSubmit={handleRegister} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
              required
            />
            
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
              required
            />
            
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
              required
            />
            
            <button
              type="submit"
              className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              Register
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">Already have an account? <a href="/login" className="text-indigo-600 hover:underline">Login now</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
