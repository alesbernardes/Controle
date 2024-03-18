const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  purchaseDate: { type: Date, required: true },
  dueDate: { type: Date },
  amount: { type: Number, required: true, min: 0 },
  store: { type: String, max: 40 },
  installments: { type: Boolean, default: false },
  numberOfInstallments: { type: Number },
  installmentValue: { type: Number },
  paymentMethod: { type: String, required: true },
  purchasedBy: { type: String, max: 50 },
});

module.exports = mongoose.model('Expense', expenseSchema);
