// build your `Resource` model here
const db = require("../../data/dbConfig");

module.exports = {
  getResources,
  addResource,
};

function getResources() {
  return db("resources");
}

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then((ids) => {
      return db('resources').where({resource_id: ids[0]});
    });
}