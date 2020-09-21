const mongoose = require('mongoose');
const { Schema } = mongoose 

const dispatchOrderSchema = new Schema({
  //this will be the ID in order model 
  orderId: {
    type: String,
    required: true
  },
  riderName: {
    type: String,
    required: true
  }
})

module.exports = DispatchOrder = mongoose.model('dispatchOrder', dispatchOrderSchema);
