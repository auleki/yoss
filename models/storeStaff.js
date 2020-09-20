const mongoose = require('mongoose');
const { Schema } = mongoose 

const storeStaffSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true
  },
  phoneNumber: {
    type: Number, 
    required: true
  },
  manager: Boolean,
  imageUrl: String
})

module.exports = StoreStaff = mongoose.model('storeStaff', storeStaffSchema);

