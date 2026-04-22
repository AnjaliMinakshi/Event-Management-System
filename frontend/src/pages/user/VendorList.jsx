import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const VendorList = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || 'Vendor';

  // Mock vendors
  const vendors = [
    { id: 1, name: 'Vendor 1', details: 'Contact Details' },
    { id: 2, name: 'Vendor 2', details: 'Contact Details' },
    { id: 3, name: 'Vendor 3', details: 'Contact Details' },
    { id: 4, name: 'Vendor 4', details: 'Contact Details' },
  ];

  return (
    <div className="min-h-screen bg-gray-300 p-8">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => navigate('/user')} className="bg-white text-black px-8 py-2 border-2 border-green-500 rounded font-semibold">Home</button>
        <div className="bg-blue-600 text-white px-32 py-2 rounded text-lg font-semibold flex gap-8">
          <span>Vendor</span>
          <span>{category}</span>
        </div>
        <button onClick={logout} className="bg-white text-black px-8 py-2 border-2 border-green-500 rounded font-semibold">LogOut</button>
      </div>

      <div className="flex justify-center gap-8 flex-wrap mt-16">
        {vendors.map(v => (
          <div key={v.id} className="bg-blue-600 text-white rounded-2xl p-8 w-64 flex flex-col items-center gap-8 shadow-lg">
            <h3 className="text-xl font-semibold">{v.name}</h3>
            <p className="text-center">{v.details}</p>
            <button 
              onClick={() => navigate(`/user/vendor/${v.id}/products`)} 
              className="bg-white text-black w-full py-2 border-2 border-green-500 rounded font-semibold mt-auto"
            >
              Shop Item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorList;
