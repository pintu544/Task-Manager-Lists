import { useState } from "react";

const AddTaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "To Do",
  });

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask({ title: "", description: "", status: "To Do" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 p-4 border rounded shadow bg-white"
    >
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={newTask.title}
        onChange={handleChange}
        className="p-2 border rounded flex-grow"
        required
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={newTask.description}
        onChange={handleChange}
        className="p-2 border rounded flex-grow"
        rows="1"
        required
      />
      <select
        name="status"
        value={newTask.status}
        onChange={handleChange}
        className="p-2 border rounded flex-shrink"
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
