const express = require('express');
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const router = express.Router();



//GET All wrokout
router.get('/', getWorkouts)


//GET Single workout    
router.get('/:id', getWorkout)


//POST New workout
router.post('/', createWorkout)

//DELETE workout
router.delete('/:id', deleteWorkout)

//UPDATE A workout
router.patch('/:id', updateWorkout)





module.exports = router