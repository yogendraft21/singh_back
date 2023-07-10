const mongoose = require('mongoose');

const paymentRequestSchema = new mongoose.Schema({
  merchant_id: String, 
  subAdmin_id: String,
  user_name:String,
  utr: String,
  date: String,
  amount: Number,
  screenshot: String,
});

const PaymentRequest = mongoose.model('payment_requests', paymentRequestSchema);

module.exports = PaymentRequest;
