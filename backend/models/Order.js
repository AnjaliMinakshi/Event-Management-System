const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: { type: String, required: true },
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  // Optional vendor field if we want to query orders per vendor quickly
  // A cart might contain items from multiple vendors, but the UI mockups show 
  // users buying from one vendor at a time, or mixed. Let's assume mixed is possible.
  orderItems: [orderItemSchema],
  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pinCode: { type: String, required: true },
  },
  contactDetails: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true }
  },
  paymentMethod: { type: String, required: true }, // Cash / UPI
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ['Received', 'Ready for Shipping', 'Out For Delivery'],
    default: 'Received'
  }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
