import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Products = () => {
  const { vendorId } = useParams();
  const navigate = useNavigate();
  const { logout } = useAuth();

  // Mock Products
  const products = [
    { id: 1, name: 'Product 1', price: 'Price' },
    { id: 2, name: 'Product 2', price: 'Price' },
    { id: 3, name: 'Product 3', price: 'Price' },
    { id: 4, name: 'Product 4', price: 'Price' },
  ];

  return (
    <div className="min-h-screen bg-gray-300 p-8 relative">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-16">
        <button onClick={() => navigate('/user')} className="bg-white text-black px-8 py-2 border-2 border-green-500 rounded font-semibold">Home</button>
        <div className="bg-blue-600 text-white px-16 py-2 rounded text-lg font-semibold absolute top-8 left-1/2 -translate-x-1/2">
          Vendor Name
        </div>
        <button onClick={logout} className="bg-white text-black px-8 py-2 border-2 border-green-500 rounded font-semibold">LogOut</button>
      </div>

      <div className="bg-blue-600 text-white px-8 py-2 rounded inline-block mb-8">
        Products
      </div>

      <div className="flex justify-start gap-8 flex-wrap">
        {products.map(p => (
          <div key={p.id} className="bg-blue-600 text-white rounded-2xl p-8 w-64 flex flex-col items-center gap-8 shadow-lg">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-center">{p.price}</p>
            <button 
              className="bg-white text-black w-full py-2 border-2 border-green-500 rounded font-semibold mt-auto"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
