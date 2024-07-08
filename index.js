const express = require("express");
const mongoose = require("mongoose");
const projectHandler = require("./projectHandler");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({ credentials: true }));

const uri = `mongodb+srv://${process.env.name}:${process.env.pass}@cluster0.83drhwd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(uri)
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

app.use("/project", projectHandler);

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
