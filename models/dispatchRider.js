const mongoose = require('mongoose');
const { Schema } = mongoose 

const dispatchRiderSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    default: null
  },
  // we'll store references to the orders here instead
  completedOrders: []
})