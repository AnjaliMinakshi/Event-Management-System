import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleOrder = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="min-h-screen bg-gray-300 p-8 flex items-center justify-center relative">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <div className="bg-blue-600 text-white px-16 py-3 rounded text-lg font-semibold mb-8 w-64 text-center">
          Item
        </div>
        <div className="bg-blue-600 text-white px-12 py-2 rounded text-base font-semibold mb-12 w-48 text-center">
          Details
        </div>

        <form onSubmit={handleOrder} className="w-full max-w-2xl flex flex-col gap-6">
          <div className="flex gap-16">
            <div className="flex-1 flex flex-col gap-6">
              <input type="text" placeholder="Name" className="bg-blue-600 text-white placeholder-white p-3 rounded text-center" required />
              <input type="email" placeholder="E-mail" className="bg-blue-600 text-white placeholder-white p-3 rounded text-center" required />
              <input type="text" placeholder="Address" className="bg-blue-600 text-white placeholder-white p-3 rounded text-center" required />
              <input type="text" placeholder="City" className="bg-blue-600 text-white placeholder-white p-3 rounded text-center" required />
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <input type="text" placeholder="Number" className="bg-blue-600 text-white placeholder-white p-3 rounded text-center" required />
              <select className="bg-blue-600 text-white p-3 rounded text-center appearance-none">
                <option value="Cash">Cash V</option>
                <option value="UPI">UPI V</option>
              </select>
              <input type="text" placeholder="State" className="bg-blue-600 text-white placeholder-white p-3 rounded text-center" required />
              <input type="text" placeholder="Pin Code" className="bg-blue-600 text-white placeholder-white p-3 rounded text-center" required />
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <button type="submit" className="bg-blue-600 text-white px-12 py-4 rounded font-semibold w-64 text-center text-lg shadow">
              Order Now
            </button>
          </div>
        </form>
      </div>

      {showPopup && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-gray-300 p-8 w-full max-w-lg rounded border border-gray-400 flex flex-col items-center">
            <h2 className="text-xl mb-4">PopUp</h2>
            <h3 className="text-xl mb-8">THANK YOU</h3>
            <div className="bg-blue-600 text-white w-full p-3 text-center mb-8">Total Amount</div>
            
            <div className="flex gap-8 w-full mb-8">
              <div className="flex-1 flex flex-col gap-4">
                <div className="bg-blue-600 text-white p-2 text-center rounded">Name</div>
                <div className="bg-blue-600 text-white p-2 text-center rounded">E-mail</div>
                <div className="bg-blue-600 text-white p-2 text-center rounded">Address</div>
                <div className="bg-blue-600 text-white p-2 text-center rounded">City</div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="bg-blue-600 text-white p-2 text-center rounded">Number</div>
                <div className="bg-blue-600 text-white p-2 text-center rounded">Payment Method</div>
                <div className="bg-blue-600 text-white p-2 text-center rounded">State</div>
                <div className="bg-blue-600 text-white p-2 text-center rounded">PinCode</div>
              </div>
            </div>

            <button onClick={() => navigate('/user')} className="bg-blue-600 text-white px-8 py-3 rounded shadow">
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
