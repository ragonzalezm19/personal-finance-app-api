const { Router } = require('express')
const Expense = require('./../models/Expense')
const { DateTime } = require('luxon')

const router = Router()

router.get('/', async (req, res, next) => {
  try {
    const expenses = await Expense.find({})

    res.status(200).json({ expenses })
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { date, shop, notes, totalAmount } = req.body

    const newExpense = new Expense({
      date: DateTime.fromFormat(date, 'dd/MM/yyyy'),
      shop,
      notes,
      totalAmount
    })

    const savedExpense = await newExpense.save()

    res.status(201).json({
      expense: savedExpense
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router
