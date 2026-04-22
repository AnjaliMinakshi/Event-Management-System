const User = require('../models/User');
const Vendor = require('../models/Vendor');
const generateToken = require('../utils/generateToken');

// User Login
exports.authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id, user.role),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

// Vendor Login
exports.authVendor = async (req, res) => {
  const { email, password } = req.body;
  const vendor = await Vendor.findOne({ email });

  if (vendor && (await vendor.matchPassword(password))) {
    res.json({
      _id: vendor._id,
      name: vendor.name,
      email: vendor.email,
      role: 'vendor',
      category: vendor.category,
      token: generateToken(vendor._id, 'vendor'),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

// Admin Login
exports.authAdmin = async (req, res) => {
  const { email, password } = req.body;
  const admin = await User.findOne({ email, role: 'admin' });

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      role: 'admin',
      token: generateToken(admin._id, 'admin'),
    });
  } else {
    res.status(401).json({ message: 'Invalid admin credentials' });
  }
};

// Register User
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) return res.status(400).json({ message: 'User already exists' });

  const user = await User.create({ name, email, password, role: 'user' });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id, user.role),
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

// Register Vendor
exports.registerVendor = async (req, res) => {
  const { name, email, password, category } = req.body;
  const vendorExists = await Vendor.findOne({ email });

  if (vendorExists) return res.status(400).json({ message: 'Vendor already exists' });

  const vendor = await Vendor.create({ name, email, password, category });
  if (vendor) {
    res.status(201).json({
      _id: vendor._id,
      name: vendor.name,
      email: vendor.email,
      role: 'vendor',
      category: vendor.category,
      token: generateToken(vendor._id, 'vendor'),
    });
  } else {
    res.status(400).json({ message: 'Invalid vendor data' });
  }
};
