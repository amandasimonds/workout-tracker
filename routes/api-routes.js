const router = require("express").Router();
const Workout = require ("../models/workout.js");

router.post("/api/workouts", (req, res) => {
    console.log(req.body, req.params.id)
   // Workout.findOneAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}});
    Workout.create({})
        .then(dbWorkout => {
            console.log(dbWorkout)

           return   Workout.findOneAndUpdate({_id: dbWorkout._id}, {$push: {exercises: req.body}});
            
        })
        .then(result =>{
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        }) 
})


router.get("/api/workouts", (req, res)=> {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
})

router.get("/api/workouts/range", (req, res) =>{
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
})


module.exports = router;