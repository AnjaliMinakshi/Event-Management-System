import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/admin/AdminDashboard';
import Maintain from './pages/admin/Maintain';
import VendorDashboard from './pages/vendor/VendorDashboard';
import AddItems from './pages/vendor/AddItems';
import UserPortal from './pages/user/UserPortal';
import VendorList from './pages/user/VendorList';
import Products from './pages/user/Products';
import Cart from './pages/user/Cart';
import Checkout from './pages/user/Checkout';
import OrderStatus from './pages/user/OrderStatus';

// Placeholder Pages
const IndexPage = () => <div className="p-10 text-center"><h1 className="text-4xl">Welcome to Event Management System</h1><a href="/login" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">Go to Login</a></div>;

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup/:role" element={<Signup />} />
      
      {/* Admin Routes */}
      <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/maintain/:type" element={<ProtectedRoute role="admin"><Maintain /></ProtectedRoute>} />
      
      {/* Vendor Routes */}
      <Route path="/vendor" element={<ProtectedRoute role="vendor"><VendorDashboard /></ProtectedRoute>} />
      <Route path="/vendor/add-items" element={<ProtectedRoute role="vendor"><AddItems /></ProtectedRoute>} />
      
      {/* User Routes */}
      <Route path="/user" element={<ProtectedRoute role="user"><UserPortal /></ProtectedRoute>} />
      <Route path="/user/vendors" element={<ProtectedRoute role="user"><VendorList /></ProtectedRoute>} />
      <Route path="/user/vendor/:vendorId/products" element={<ProtectedRoute role="user"><Products /></ProtectedRoute>} />
      <Route path="/user/cart" element={<ProtectedRoute role="user"><Cart /></ProtectedRoute>} />
      <Route path="/user/checkout" element={<ProtectedRoute role="user"><Checkout /></ProtectedRoute>} />
      <Route path="/user/order-status" element={<ProtectedRoute role="user"><OrderStatus /></ProtectedRoute>} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-200">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
