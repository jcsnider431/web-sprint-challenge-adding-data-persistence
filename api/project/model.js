// build your `Project` model here
const db = require("../../data/dbConfig");

//export functions
module.exports = {
  getProjects,
  addProject,
};

function getProjects() {
  return db("projects");
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then((id) => {
      return db('projects').where({project_id: id[0]});
    });
}