const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a type of training",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name of workout",
      },
      duration: {
        type: Number,
        required: "Enter the minutes for workout",
      },
      weight: {
        type: Number,
        trim: true,
        required: "Enter the weight",
      },
      reps: {
        type: Number,
        trim: true,
        required: "Enter the reps performed",
      },
      sets: {
        type: Number,
        trim: true,
        required: "Enter the sets performed",
      },
    },
  ],
});
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
