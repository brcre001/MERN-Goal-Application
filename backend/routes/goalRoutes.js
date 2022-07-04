const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal, } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals)
router.route('/').post(protect,setGoal)
router.route('/:id').put(protect,updateGoal)
router.route('/:id').delete(protect,deleteGoal)

module.exports = router