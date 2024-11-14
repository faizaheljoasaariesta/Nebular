import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../config/firebaseConfig';
import { useNavigate, Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firestore = getFirestore();

const FormLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole') || 'student';
    setRole(storedRole.charAt(0).toUpperCase() + storedRole.slice(1));
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const userRef = doc(firestore, 'users', user.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        await setDoc(userRef, {
          email: user.email,
          role: role.toLowerCase(),
          createdAt: new Date(),
        });
        console.log('New user created in Firestore with role:', role);
      } else {
        console.log('User already exists in Firestore.');
      }

      navigate('/tools');
    } catch (error) {
      console.error('Google login error:', error);
      setError('Google login failed');
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/tools');
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message.includes('wrong-password')) {
          setError('Invalid password');
        } else if (error.message.includes('user-not-found')) {
          setError('No account found with this email');
        } else {
          setError('Login failed. Please try again.');
        }
        console.error('Login error:', error.message);
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
          <h2 className="text-3xl font-semibold text-center mb-6 text-indigo-900">{role} Sign In</h2>
          
          {error && <p className="text-red-400 text-center mb-4">{error}</p>}
          
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border text-black border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border text-black border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            
            <button
              type="submit"
              className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400 mb-4">Or</p>
            <button
              className="w-full p-3 bg-indigo-950 text-white rounded-lg hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition flex items-center justify-center"
              onClick={handleGoogleLogin}
            >
              <FaGoogle className="mr-3 text-white text-xl" />
              Login with Google
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{' '}
              <Link to="/register" className="text-indigo-600 hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
