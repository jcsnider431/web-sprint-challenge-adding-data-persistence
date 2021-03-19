// build your `/api/tasks` router here
const express = require("express");
const Task = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Task.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((error) => {
      next(error);
    });
});

router.post("/", (req, res, next) => {
  const newTask = req.body;
  Task.addTask(newTask)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((error) => {
      next(error)
    });
});

router.use((err, req, res, next) => {
  res.status(500).json({
    message: "something went wrong.",
    error: err.message,
  });
});

module.exports = router;