import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
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

      {/* Welcome Banner */}
      <div className="max-w-4xl mx-auto bg-white border-2 border-green-500 p-4 text-center rounded mb-24 shadow-sm">
        <h1 className="text-xl font-semibold">Welcome Admin</h1>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-32">
        <button onClick={() => navigate('/admin/maintain/user')} className="bg-white border-2 border-green-500 px-8 py-4 rounded text-black font-semibold shadow-sm w-48 text-center">
          Maintain User
        </button>
        <button onClick={() => navigate('/admin/maintain/vendor')} className="bg-white border-2 border-green-500 px-8 py-4 rounded text-black font-semibold shadow-sm w-48 text-center">
          Maintain Vendor
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
