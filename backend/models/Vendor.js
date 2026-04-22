const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  category: { 
    type: String, 
    required: true, 
    enum: ['Catering', 'Florist', 'Decoration', 'Lighting'] 
  },
  membershipStatus: {
    type: String,
    enum: ['Active', 'Inactive', 'Cancelled'],
    default: 'Inactive'
  },
  membershipDuration: {
    type: String, // '6 months', '1 year', '2 years'
    default: '6 months'
  },
  membershipEndDate: {
    type: Date
  }
}, { timestamps: true });

vendorSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

vendorSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Vendor = mongoose.model('Vendor', vendorSchema);
module.exports = Vendor;
