import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const { role } = useParams(); // 'user' or 'vendor'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState('Catering');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    // Simulate signup
    const dummyUser = { id: Date.now(), name, email, role, category: role === 'vendor' ? category : undefined };
    login(dummyUser);
    navigate(`/${role}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative bg-gray-200">
      <div className="absolute top-4 left-4 flex gap-4 w-full px-8 justify-between">
        <button className="bg-blue-600 text-white px-6 py-2 border border-blue-800">Chart</button>
        <button onClick={() => navigate('/login')} className="bg-blue-600 text-white px-6 py-2 border border-blue-800">Back</button>
      </div>
      
      <div className="w-full max-w-2xl bg-gray-300 p-12 rounded border border-gray-400">
        <div className="bg-blue-300 p-4 text-center mb-12 border border-blue-400">
          <h2 className="text-xl font-bold">Event Management System</h2>
        </div>
        
        <form onSubmit={handleSignup} className="space-y-6">
          <div className="flex items-center gap-4">
            <label className="w-32 bg-blue-600 text-white p-3 text-center rounded border border-blue-800 shadow">Name</label>
            <input 
              type="text" 
              className="flex-1 p-3 bg-blue-600 text-white placeholder-white border border-blue-800 text-center"
              placeholder={role.charAt(0).toUpperCase() + role.slice(1)}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="w-32 bg-blue-600 text-white p-3 text-center rounded border border-blue-800 shadow">Email</label>
            <input 
              type="email" 
              className="flex-1 p-3 bg-blue-600 text-white placeholder-white border border-blue-800 text-center"
              placeholder={role.charAt(0).toUpperCase() + role.slice(1)}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="w-32 bg-blue-600 text-white p-3 text-center rounded border border-blue-800 shadow">Password</label>
            <input 
              type="password" 
              className="flex-1 p-3 bg-blue-600 text-white placeholder-white border border-blue-800 text-center"
              placeholder={role.charAt(0).toUpperCase() + role.slice(1)}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          {role === 'vendor' && (
            <div className="flex items-center gap-4 relative">
              <label className="w-32 bg-blue-600 text-white p-3 text-center rounded border border-blue-800 shadow">Category</label>
              <select 
                className="flex-1 p-3 bg-blue-600 text-white border border-blue-800 text-center appearance-none"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Catering">Catering</option>
                <option value="Florist">Florist</option>
                <option value="Decoration">Decoration</option>
                <option value="Lighting">Lighting</option>
              </select>
            </div>
          )}
          
          <div className="flex justify-center mt-12">
            <button type="submit" className="w-32 bg-blue-600 text-white border border-blue-800 p-3 rounded shadow">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
