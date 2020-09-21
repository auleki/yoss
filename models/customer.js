const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String, 
    trim: true,
    lowercase: true,
    unique: true
  },
  phoneNumber: {
    type: Number, 
    required: true
  },
  address: {
    type: String,
    required: true
  },
  orderHistory: [],
  imageUrl: String   

})

module.exports = Customer = mongoose.model('customer', customerSchema);