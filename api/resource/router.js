// build your `/api/resources` router here
const express = require("express");
const Resource = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Resource.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((error) => {
      next(error);
    });
});

router.post("/", (req, res) => {
  const newResource = req.body;
  Resource.addResource(newResource)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ message: `You have an error: ${error.message}` });
    });
});

router.use((err, req, res, next) => {
  res.status(500).json({
    message: "something went wrong...",
    error: err.message,
  });
});

module.exports = router;