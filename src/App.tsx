import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Chatbot from './pages/Chatbot';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './config/firebaseConfig';
import History from './pages/History';
import Mentorship from './pages/Mentorship';
import Career from './pages/Career';
import Profile from './pages/Profile';
import Tools from './pages/Tools';
import Register from './pages/Register';
import RoleChoose from './pages/RoleChoose';
import Portfolio from './pages/Portfolio';
import Assessment from './pages/Assessment';
import Assignment from './pages/Assignment';

const ProtectedRoute: React.FC<{ isAuth: boolean }> = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

const App: React.FC = () => {
  const [user] = useAuthState(auth);

  return (
    <Routes>
      <Route path="/" element={!user ? <RoleChoose /> : <Navigate to="/tools" />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/tools" />} />
      <Route path="/register" element={!user ? <Register /> : <Navigate to="/login" />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/assessment" element={<Assessment />} />
      <Route path="/assignment" element={<Assignment />} />
      
      <Route element={<ProtectedRoute isAuth={!!user} />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/history" element={<History />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/career" element={<Career />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tools" element={<Tools />} />
      </Route>

      <Route path="*" element={<Navigate to={user ? "/tools" : "/login"} />} />
    </Routes>
  );
};

export default App;
