const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: Array, required: true },
  liveLink: { type: String, required: true },
  repository: { type: String, required: true },
  imageUrl: { type: String, required: true },
});
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
