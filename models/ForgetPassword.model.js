const mongoose = require('mongoose');

const forgetPasswordSchema = new mongoose.Schema({
  email:String,
  otp:Number,
});

const ForgetPassword = mongoose.model('forget_password', forgetPasswordSchema);

module.exports = ForgetPassword;
