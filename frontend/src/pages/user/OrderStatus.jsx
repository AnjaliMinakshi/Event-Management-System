import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const OrderStatus = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  // Mock order
  const order = {
    name: 'User Name',
    email: 'user@example.com',
    address: '123 Event Street',
    status: 'Ready for Shipping'
  };

  return (
    <div className="min-h-screen bg-gray-300 p-8">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-16">
        <button onClick={() => navigate('/user')} className="bg-blue-600 text-white px-8 py-2 rounded">Home</button>
        <button onClick={logout} className="bg-blue-600 text-white px-8 py-2 rounded">LogOut</button>
      </div>

      <div className="flex justify-center mb-12">
        <div className="bg-blue-600 text-white px-32 py-4 rounded text-xl">
          User Order Status
        </div>
      </div>

      <div className="flex justify-center gap-8 flex-wrap max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 flex-1">
          <div className="bg-blue-600 text-white p-3 text-center rounded">Name</div>
          <div className="bg-blue-600 text-white p-4 text-center rounded">{order.name}</div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="bg-blue-600 text-white p-3 text-center rounded">E-mail</div>
          <div className="bg-blue-600 text-white p-4 text-center rounded">{order.email}</div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="bg-blue-600 text-white p-3 text-center rounded">Address</div>
          <div className="bg-blue-600 text-white p-4 text-center rounded">{order.address}</div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="bg-blue-600 text-white p-3 text-center rounded">Status</div>
          <div className="bg-blue-600 text-white p-4 text-center rounded">{order.status}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
