const asyncHandler = require('express-async-handler')

// Get goals
// GET /api/goals
// Private
const getGoals = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Get goals'})

})

// Get goals
// POST /api/goals
// Private
const setGoal = asyncHandler(async(req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set goals'})

})

// Get goals
// PUT /api/goals/:id
// Private
const updateGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})

})

// Get goals
// DELETE /api/goals/:id
// Private
const deleteGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})

})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}