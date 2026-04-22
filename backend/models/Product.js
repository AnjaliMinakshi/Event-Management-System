const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Vendor'
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }, // Base64 string
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
