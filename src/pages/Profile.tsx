import React from 'react';
import Sidebar from '../components/Sidebar';

const Profile: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow bg-white p-6">
        <div className='w-full h-full flex justify-center items-center'>
          <h1>Profile</h1>
        </div>
      </main>
    </div>
  );
};

export default Profile;