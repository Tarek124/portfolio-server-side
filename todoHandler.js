const express = require("express");
const router = express.Router();
const todoSchema = require("./todoSchema");
const mongoose = require("mongoose");

const Todo = mongoose.model("Todo", todoSchema);

// GET all todos
router.get("/", async (req, res) => {});

// GET a todo by ID
router.get("/:id", async (req, res) => {});

// POST a new todo
router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  try {
    const savedTodo = await newTodo.save();
    res
      .status(200)
      .json({ message: "Todo was inserted successfully", savedTodo });
  } catch (err) {
    res.status(500).json({ error: "There was a server-side error" });
  }
});

// POST a many todo
router.post("/all", async (req, res) => {
  console.log(req.body);
  try {
    await Todo.insertMany(req.body);
    res
      .status(200)
      .json({ message: "Todo was inserted successfully" });
  } catch (err) {
    res.status(500).json({ error: "There was a server-side error" });
  }
});

// PUT (update) a todo by ID
router.put("/:id", async (req, res) => {});

// DELETE a todo by ID
router.delete("/:id", async (req, res) => {});

module.exports = router;
