const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal, } = require('../controllers/goalController')

router.route('/').get(getGoals)
router.route('/').post(setGoal)
router.route('/:id').put(updateGoal)
router.route('/:id').delete(deleteGoal)

module.exports = router