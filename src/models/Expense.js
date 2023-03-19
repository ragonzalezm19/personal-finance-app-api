const { Schema, model, trusted } = require('mongoose')

const expenseSchema = new Schema({
  date: {
    type: Date,
    require: true
  },
  shop: {
    type: String,
    require: true
  },
  notes: {
    type: String,
    require: false
  },
  totalAmount: {
    type: Number,
    require: trusted
  }
})

const Expense = model('Expense', expenseSchema)

module.exports = Expense
