const User = require('../models/User');
const Vendor = require('../models/Vendor');

// Users
exports.getUsers = async (req, res) => {
  const users = await User.find({ role: 'user' }).select('-password');
  res.json(users);
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User removed' });
};

// Vendors
exports.getVendors = async (req, res) => {
  const vendors = await Vendor.find({}).select('-password');
  res.json(vendors);
};

exports.deleteVendor = async (req, res) => {
  await Vendor.findByIdAndDelete(req.params.id);
  res.json({ message: 'Vendor removed' });
};

exports.updateVendorMembership = async (req, res) => {
  const { status, duration } = req.body;
  const vendor = await Vendor.findById(req.params.id);
  if (vendor) {
    vendor.membershipStatus = status || vendor.membershipStatus;
    vendor.membershipDuration = duration || vendor.membershipDuration;
    
    // Calculate end date based on duration
    if (status === 'Active') {
      const now = new Date();
      if (duration === '6 months') vendor.membershipEndDate = new Date(now.setMonth(now.getMonth() + 6));
      else if (duration === '1 year') vendor.membershipEndDate = new Date(now.setFullYear(now.getFullYear() + 1));
      else if (duration === '2 years') vendor.membershipEndDate = new Date(now.setFullYear(now.getFullYear() + 2));
    }

    const updatedVendor = await vendor.save();
    res.json(updatedVendor);
  } else {
    res.status(404).json({ message: 'Vendor not found' });
  }
};
