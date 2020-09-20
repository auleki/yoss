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
  address: {
    type: String,
    required: true
  },
  orderHistory: [],  

})

module.exports = Customer = mongoose.model('customer', customerSchema);