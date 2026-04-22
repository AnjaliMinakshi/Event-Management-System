import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AddItems = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  
  // Mock data for products list
  const [products, setProducts] = useState([
    { id: 1, name: 'Sample Item', price: '150', image: 'Image' }
  ]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-300 p-8">
      {/* Top Navigation */}
      <div className="flex justify-between items-center bg-blue-600 p-4 mb-8">
        <div className="text-white text-xl">Welcome '{user?.name || 'Vendor Name'}'</div>
        <div className="flex gap-4">
          <button className="bg-white text-black px-4 py-2 border-2 border-green-500 rounded font-semibold">Product Status</button>
          <button className="bg-white text-black px-4 py-2 border-2 border-green-500 rounded font-semibold">Request Item</button>
          <button className="bg-white text-black px-4 py-2 border-2 border-green-500 rounded font-semibold">View Product</button>
          <button onClick={handleLogout} className="bg-white text-black px-4 py-2 border-2 border-green-500 rounded font-semibold">Log Out</button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Left Form: Add Product */}
        <div className="w-1/3 bg-blue-600 p-8 flex flex-col gap-6 rounded shadow-md">
          <input type="text" placeholder="Product Name" className="w-full p-4 bg-gray-200 text-center rounded placeholder-black text-black" />
          <input type="text" placeholder="Product Price" className="w-full p-4 bg-gray-200 text-center rounded placeholder-black text-black" />
          <input type="text" placeholder="Product Image" className="w-full p-4 bg-gray-200 text-center rounded placeholder-black text-black" />
          
          <button className="bg-white text-black p-3 rounded font-semibold mt-auto mx-12">
            Add The Peoduct
          </button>
        </div>

        {/* Right Area: List of Products */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Header Row */}
          <div className="flex gap-4">
            <div className="bg-blue-600 text-white p-4 flex-1 text-center rounded">Product Image</div>
            <div className="bg-blue-600 text-white p-4 flex-1 text-center rounded">Product Name</div>
            <div className="bg-blue-600 text-white p-4 flex-1 text-center rounded">Product Price</div>
            <div className="bg-blue-600 text-white p-4 flex-1 text-center rounded">Action</div>
          </div>
          
          {/* Product Items */}
          {products.map(p => (
            <div key={p.id} className="flex gap-4 items-center">
              <div className="bg-blue-600 text-white p-4 flex-1 h-32 flex items-center justify-center rounded">Image</div>
              <div className="bg-blue-600 text-white p-4 flex-1 text-center rounded">Image Name</div>
              <div className="bg-blue-600 text-white p-4 flex-1 text-center rounded">Rs/-</div>
              <div className="flex-1 flex flex-col gap-2">
                <button className="bg-blue-600 text-white p-4 text-center rounded border-b-2 border-orange-500">Delete</button>
                <button className="bg-blue-600 text-white p-4 text-center rounded">Update</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddItems;
