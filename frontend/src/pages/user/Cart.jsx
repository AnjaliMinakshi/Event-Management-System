import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Cart = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  
  // Mock cart items
  const [items, setItems] = useState([
    { id: 1, name: 'Product Name', price: 100, quantity: 2, total: 200 }
  ]);

  return (
    <div className="min-h-screen bg-gray-300 p-8">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => navigate('/user')} className="bg-white text-black px-6 py-2 border-2 border-green-500 rounded font-semibold">Home</button>
        <button className="bg-white text-black px-6 py-2 border-2 border-green-500 rounded font-semibold">View Product</button>
        <button className="bg-white text-black px-6 py-2 border-2 border-green-500 rounded font-semibold">Request Item</button>
        <button className="bg-white text-black px-6 py-2 border-2 border-green-500 rounded font-semibold">Product Status</button>
        <button onClick={logout} className="bg-white text-black px-6 py-2 border-2 border-green-500 rounded font-semibold">LogOut</button>
      </div>

      <div className="bg-blue-300 w-full p-2 text-center border border-blue-400 mb-8">
        <span className="text-lg">Shopping Cart</span>
      </div>

      {/* Cart Table Header */}
      <div className="flex gap-4 mb-4">
        <div className="bg-blue-600 text-white p-4 flex-1 text-center rounded">Image</div>
        <div className="bg-blue-600 text-white p-4 flex-1 text-center rounded">Name</div>
        <div className="bg-blue-600 text-white p-4 flex-1 text-center rounded">Price</div>
        <div className="bg-blue-600 text-white p-4 flex-1 text-center rounded">Quantity</div>
        <div className="bg-blue-600 text-white p-4 flex-1 text-center rounded">Total Price</div>
        <div className="bg-blue-600 text-white p-4 flex-1 text-center rounded">Action</div>
      </div>

      {/* Cart Items */}
      {items.map(item => (
        <div key={item.id} className="flex gap-4 mb-8">
          <div className="bg-blue-600 text-white p-8 flex-1 text-center rounded h-32 flex items-center justify-center">Image</div>
          <div className="bg-blue-600 text-white p-4 flex-1 text-center rounded flex items-center justify-center">{item.name}</div>
          <div className="bg-blue-600 text-white p-4 flex-1 text-center rounded flex items-center justify-center">{item.price}/-</div>
          <div className="bg-blue-600 text-white p-4 flex-1 text-center rounded flex items-center justify-center relative">
            <select className="bg-blue-600 text-white text-lg w-full h-full text-center appearance-none" defaultValue={item.quantity}>
              <option value={1}>1 V</option>
              <option value={2}>2 V</option>
              <option value={3}>3 V</option>
            </select>
          </div>
          <div className="bg-blue-600 text-white p-4 flex-1 text-center rounded flex items-center justify-center">{item.total}/-</div>
          <div className="bg-blue-600 text-white p-4 flex-1 text-center rounded flex items-center justify-center cursor-pointer hover:bg-blue-700">Remove</div>
        </div>
      ))}

      {/* Footer Area */}
      <div className="flex items-center gap-4 bg-blue-600 p-4 rounded mb-8">
        <div className="flex-1 text-white text-lg">Grand Total</div>
        <div className="text-white text-lg mr-8">200/-</div>
        <button className="bg-white text-black px-6 py-2 border border-gray-400 rounded">Delete All</button>
      </div>

      <div className="flex justify-center">
        <button onClick={() => navigate('/user/checkout')} className="bg-white text-black px-12 py-3 border-2 border-green-500 rounded font-semibold w-1/2 text-center text-lg shadow">
          Proceed to CheckOut
        </button>
      </div>
    </div>
  );
};

export default Cart;
