import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [role, setRole] = useState(null); // 'admin', 'vendor', 'user'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Simulate login for now
    const dummyUser = { id: 1, email, role };
    login(dummyUser);
    navigate(`/${role}`);
  };

  if (!role) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-gray-300 p-8 rounded shadow-lg border border-gray-400">
          <div className="bg-blue-300 p-4 text-center mb-8 border border-blue-400">
            <h2 className="text-xl font-bold">Event Management System</h2>
          </div>
          <h3 className="text-center mb-4 text-lg">Select Login Type</h3>
          <div className="space-y-4">
            <button onClick={() => setRole('admin')} className="w-full bg-blue-500 text-white p-3 rounded">Admin Login</button>
            <button onClick={() => setRole('vendor')} className="w-full bg-blue-500 text-white p-3 rounded">Vendor Login</button>
            <button onClick={() => setRole('user')} className="w-full bg-blue-500 text-white p-3 rounded">User Login</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      {role !== 'admin' && (
        <div className="absolute top-4 left-4 flex gap-4 w-full px-8 justify-between">
          <button className="bg-blue-600 text-white px-6 py-2 border border-blue-800">Chart</button>
          <button onClick={() => setRole(null)} className="bg-blue-600 text-white px-6 py-2 border border-blue-800">Back</button>
        </div>
      )}
      
      <div className="w-full max-w-2xl bg-gray-300 p-12 rounded border border-gray-400">
        <div className="bg-blue-300 p-4 text-center mb-12 border border-blue-400">
          <h2 className="text-xl font-bold">Event Management System</h2>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex items-center gap-4">
            <label className="w-32 bg-blue-600 text-white p-3 text-center rounded border border-blue-800 shadow">User Id</label>
            <input 
              type="text" 
              className="flex-1 p-3 bg-blue-300 border border-blue-400 placeholder-black text-center"
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
              className="flex-1 p-3 bg-blue-300 border border-blue-400 placeholder-black text-center"
              placeholder={role.charAt(0).toUpperCase() + role.slice(1)}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="flex justify-center gap-12 mt-12">
            <button type="button" onClick={() => setRole(null)} className="w-32 bg-gray-500 text-black border border-gray-700 p-2 rounded shadow">Cancel</button>
            <button type="submit" className="w-32 bg-gray-500 text-black border border-gray-700 p-2 rounded shadow">Login</button>
          </div>
        </form>
        
        {role !== 'admin' && (
          <div className="text-center mt-8">
            <a href={`/signup/${role}`} className="text-blue-800 underline">Sign up as {role}</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
