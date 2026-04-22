const Product = require('../models/Product');
const Order = require('../models/Order');

exports.getProducts = async (req, res) => {
  const products = await Product.find({ vendor: req.user._id });
  res.json(products);
};

exports.addProduct = async (req, res) => {
  const { name, price, image } = req.body;
  const product = new Product({
    vendor: req.user._id,
    name,
    price,
    image,
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product && product.vendor.toString() === req.user._id.toString()) {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product removed' });
  } else {
    res.status(404).json({ message: 'Product not found or unauthorized' });
  }
};

exports.getVendorOrders = async (req, res) => {
  // Find orders where an item belongs to this vendor
  // For simplicity, let's fetch all orders and filter those containing vendor's products
  const products = await Product.find({ vendor: req.user._id });
  const productIds = products.map(p => p._id.toString());
  
  const orders = await Order.find({}).populate('user', 'name email');
  const vendorOrders = orders.filter(order => 
    order.orderItems.some(item => productIds.includes(item.product.toString()))
  );
  
  res.json(vendorOrders);
};

exports.updateOrderStatus = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.status = req.body.status;
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
};
