const mongoose = require('mongoose');
const { generateReferralCode } = require('../utils/actions');
const ThirdPartyProviderSchema = require('./ThirdPartyProviderSchema');


// const ThirdPartyProviderSchema = new mongoose.Schema({
//   provider_name: {
//     type: String,
//     default: null
//   },
//   provider_id: {
//     type: String,
//     default: null 
//   },
//   provider_data: {
//     type: {},
//     default: null
//   }
// })


const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  email_is_verified: {
    type: Boolean, 
    default: false
  },
  password: {
    type: String,
    min: 3,
    required: true
  },
  referral_code: {
    type: String, 
    default: generateReferralCode()
  },
  referred_by: {
    type: String,
    default: null
  },
  third_party_auth: [ThirdPartyProviderSchema],
  date: {
    type: Date,
    default: Date.now
  },


}, { strict: false })

module.exports = User = mongoose.model("user", UserSchema);