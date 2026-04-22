import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const UserPortal = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['Catering', 'Florist', 'Decoration', 'Lighting'];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleVendorClick = () => {
    if (selectedCategory) {
      navigate(`/user/vendors?category=${selectedCategory}`);
    } else {
      alert('Please select a category first');
    }
  };

  return (
    <div className="min-h-screen bg-gray-300 p-8 flex items-center justify-center relative">
      {/* Left Dropdown (Category) */}
      <div className="absolute left-12 top-48">
        <div className="bg-blue-300 p-4 rounded-lg w-48 border border-blue-400">
          <h3 className="font-semibold mb-2">Drop Down</h3>
          <ul className="space-y-2">
            {categories.map(cat => (
              <li key={cat} className="cursor-pointer flex items-center gap-2">
                <input 
                  type="radio" 
                  name="category" 
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(cat)}
                  className="accent-blue-600"
                />
                {cat}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full max-w-4xl">
        <div className="bg-blue-600 text-white text-center p-4 mb-16 text-xl rounded">
          WELCOME USER
        </div>

        <div className="flex justify-between mb-24">
          <button onClick={handleVendorClick} className="bg-blue-600 text-white px-8 py-4 rounded shadow-md w-40 text-lg">Vendor</button>
          <button onClick={() => navigate('/user/cart')} className="bg-blue-600 text-white px-8 py-4 rounded shadow-md w-40 text-lg">Cart</button>
          <button className="bg-blue-600 text-white px-8 py-4 rounded shadow-md w-40 text-lg">Guest List</button>
          <button className="bg-blue-600 text-white px-8 py-4 rounded shadow-md w-40 text-lg">Order Status</button>
        </div>

        <div className="flex justify-center">
          <button onClick={handleLogout} className="bg-blue-600 text-white px-8 py-4 rounded shadow-md w-40 text-lg">LogOut</button>
        </div>
      </div>
    </div>
  );
};

export default UserPortal;
