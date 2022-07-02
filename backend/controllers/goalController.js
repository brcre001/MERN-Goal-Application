

// Get goals
// GET /api/goals
// Private
const getGoals = (req,res) => {
    res.status(200).json({message: 'Get goals'})

}

// Get goals
// POST /api/goals
// Private
const setGoal = (req,res) => {
    res.status(200).json({message: 'Set goals'})

}

// Get goals
// PUT /api/goals/:id
// Private
const updateGoal = (req,res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})

}

// Get goals
// DELETE /api/goals/:id
// Private
const deleteGoal = (req,res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})

}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}