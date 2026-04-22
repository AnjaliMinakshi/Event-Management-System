const Vendor = require('../models/Vendor');
const Product = require('../models/Product');
const Order = require('../models/Order');

exports.getVendorsByCategory = async (req, res) => {
  const { category } = req.query;
  const filter = category ? { category } : {};
  const vendors = await Vendor.find(filter).select('-password');
  res.json(vendors);
};

exports.getVendorProducts = async (req, res) => {
  const products = await Product.find({ vendor: req.params.vendorId });
  res.json(products);
};

exports.createOrder = async (req, res) => {
  const { orderItems, shippingAddress, contactDetails, paymentMethod, totalAmount } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400).json({ message: 'No order items' });
    return;
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      contactDetails,
      paymentMethod,
      totalAmount,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
};

exports.getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(orders);
};
