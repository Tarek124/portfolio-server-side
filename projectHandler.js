const express = require("express");
const router = express.Router();
const Project = require("./projectSchema");

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).send(projects);
  } catch (err) {
    res.status(500).json({ err, message: "there was a server-side error" });
  }
});
router.post("/", async (req, res) => {
  const projectData = req.body;

  try {
    const newProject = new Project(projectData);
    await newProject.save();
    res.status(200).send({ message: "project saved successfully" });
  } catch (err) {
    res.status(500).json({ err, message: "there was a server-side error" });
  }
});
module.exports = router;
