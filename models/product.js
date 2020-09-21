const mongoose = require('mongoose');
const { Schema } = mongoose 

const productSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  price: {
    type: Number,
    required: true
  },

})

module.export = Product = mongoose.model('product', productSchema);

