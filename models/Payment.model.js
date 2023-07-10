const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  user_name: String,
  amount: { type: Number, required: true },
  type: { type: String, enum: ['debit', 'credit'], required: true },
  timestamp: { type: Date, default: Date.now },
  account_number:{type: String, required: true},
  merchantID : {type: String, required: true},
  remark:{type:String}
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
