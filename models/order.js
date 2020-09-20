const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  total: {
    type: Number,
    required: true
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