const mongoose = require("mongoose");

// Task database schema
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide a task name."],
    trim: true,
    maxlength: [20, "Task name can not be more than 20 characters."],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
