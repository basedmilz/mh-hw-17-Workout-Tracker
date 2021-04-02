const router = require("express").Router();
const Workout = require("../models/Workout");

// router.post("/api/workouts", (req, res) => {
// console.log(req.body)
//     Workout.create({}, (err, data) => {
//         if (err) {
//             console.log(err)
            
//         } else {res.json(data)
//         }
//     } )

// }) 

router.put("/api/workouts/:id", (req, res) =>{
    Workout.findOneAndUpdate(
        req.params.id, {$push: {exercises: req.body}}, (err , data) => {
            if (err)
            console.log(err)
        }
        else console.log(data)
    )
})

module.exports = router;