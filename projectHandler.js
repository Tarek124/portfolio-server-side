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
})
router.delete("/", async (req, res) => {
  const { id } = req.query;
  try {
    const deletedDocument = await Project.deleteOne({ _id: id });
    if (deletedDocument.deletedCount === 1) {
      return res.status(200).json({ message: "Document deleted successfully" });
    } else {
      return res.status(404).json({ error: "Document not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
