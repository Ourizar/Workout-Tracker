const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", (req, res) => {
  let workout = req.body;
  Workout.create({ workout })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(params.id, { $push: { exercise: body } },
    { new: true, runValidators: true }
    )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .then(dbWorkouts => {
      res.json(dbWorkouts);
     })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
  .sort({ _id: -1 })
    .limit(7)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
      console.log(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete('/api/workouts', ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)  
  .then(() => {
    res.json(true);
  })
  .catch(err => {
    res.json(err);
  });
});



module.exports = router;