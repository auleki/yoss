const mongoose = require('mongoose');
const { Schema } = mongoose 

const storeSchema =  new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  address : {
    state: String, 
    location: String,
    street: String
  },
  completedSales: [purchases],
  availableProducts: {
    type: [],
    default: null
  },
  dateJoined: Date,
  logo: String
})

module.exports = Store = mongoose.model('store', storeSchema)