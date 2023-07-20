const mongoose = require("mongoose");

// Task database schema
const TaskSchema = new mongoose.Schema({ name: String, completed: Boolean });

module.exports = mongoose.model("Task", TaskSchema);
