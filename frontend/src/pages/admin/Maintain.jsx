import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Maintain = () => {
  const { type } = useParams(); // 'user' or 'vendor'
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-16">
        <button onClick={() => navigate('/admin')} className="bg-white border-2 border-green-500 px-8 py-2 rounded text-black font-semibold">Home</button>
        <button onClick={handleLogout} className="bg-white border-2 border-green-500 px-8 py-2 rounded text-black font-semibold">LogOut</button>
      </div>

      <div className="flex max-w-4xl mx-auto gap-24">
        {/* Left Column Navigation */}
        <div className="flex flex-col gap-12 w-48">
          <button className="bg-white border-2 border-green-500 px-4 py-3 rounded text-black font-semibold shadow-sm text-center">
            Membership
          </button>
          <button className="bg-white border-2 border-green-500 px-4 py-3 rounded text-black font-semibold shadow-sm text-center whitespace-nowrap">
            User Management
          </button>
        </div>

        {/* Right Column Actions */}
        <div className="flex flex-col gap-12 pt-2">
          <div className="flex flex-col gap-4">
            <button className="bg-white border-2 border-green-500 px-12 py-2 rounded text-black font-semibold shadow-sm text-center">
              Add
            </button>
            <button className="bg-white border-2 border-green-500 px-12 py-2 rounded text-black font-semibold shadow-sm text-center">
              Update
            </button>
          </div>
          
          <div className="flex flex-col gap-4">
            <button className="bg-white border-2 border-green-500 px-12 py-2 rounded text-black font-semibold shadow-sm text-center">
              Add
            </button>
            <button className="bg-white border-2 border-green-500 px-12 py-2 rounded text-black font-semibold shadow-sm text-center">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintain;
