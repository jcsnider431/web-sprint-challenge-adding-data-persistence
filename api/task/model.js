// build your `Task` model here
const db = require("../../data/dbConfig");

module.exports = {
  getTasks,
  addTask,
};

function getTasks() {
  return db("tasks");
}

function addTask(task) {
  return db("tasks")
    .insert(task)
    .then((ids) => {
      return db('tasks').where({task_id: ids[0]});
    });
}