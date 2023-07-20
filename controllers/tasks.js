const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("all items");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};
const getTask = (req, res) => {
  const { id } = req.params;
  res.json({ id });
};
const updateTask = (req, res) => {
  const { id } = req.params;
  res.json({ id });
};
const deleteTask = (req, res) => {
  const { id } = req.params;
  res.json({ id });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
