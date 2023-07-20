const getAllTasks = (req, res) => {
  res.send("all items");
};

const createTask = (req, res) => {
  const { body } = req;
  res.json({ body });
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
