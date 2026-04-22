import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const VendorDashboard = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-blue-600 p-12">
      {/* Welcome Banner */}
      <div className="bg-gray-300 w-full p-6 text-center shadow-md mb-16">
        <h1 className="text-2xl font-normal text-black">Welcome<br/>Vendor</h1>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-12 flex-wrap">
        <button className="bg-gray-300 px-8 py-3 rounded text-black font-normal shadow-md w-40">
          Your Item
        </button>
        <button onClick={() => navigate('/vendor/add-items')} className="bg-gray-300 px-8 py-3 rounded text-black font-normal shadow-md w-40">
          Add New Item
        </button>
        <button className="bg-gray-300 px-8 py-3 rounded text-black font-normal shadow-md w-40">
          Transection
        </button>
        <button onClick={handleLogout} className="bg-gray-300 px-8 py-3 rounded text-black font-normal shadow-md w-40">
          LogOut
        </button>
      </div>
    </div>
  );
};

export default VendorDashboard;
