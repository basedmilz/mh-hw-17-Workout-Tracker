const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type of exercise?"
      },
      name: {
        type: String,
        trim: true,
        required: "Name of exercise?"
      },

      duration: {
        type: Number,
        required: "How long was your exercise?"
      },

      weight: {
        type: Number,
        
      },

      reps: {
        type: Number,
        

      },

      sets: {
        type: Number,
        
      },

      distance: {
        type: Number,
      }
    }]

})



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;