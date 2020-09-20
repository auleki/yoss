const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  total: {
    type: Number,
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  cashier: {
    type: String,
    required: true 
  },
  dispatchRider: {
    default: null,
    name : String,
    id: Number
  },
  products: {
    type:  [product],
    required: true
  },
  orderTime: {
    received: Date.now,
    delivered: null 
  }
  
})

module.exports = OrderSchema = mongoose.model('order', orderSchema)