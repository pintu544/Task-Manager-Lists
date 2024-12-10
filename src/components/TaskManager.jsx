import { useState } from "react";
import TaskTable from "./TaskTable";
import TaskCounters from "./TaskCounters";

const TaskManager = ({ tasks, setTasks }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm) ||
      task.description.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="p-6 bg-white shadow-md rounded-lg space-y-6">
      <TaskCounters tasks={tasks} />

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search by Title or Description"
          value={searchTerm}
          onChange={handleSearch}
          className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          onClick={() => setSearchTerm("")}
        >
          Clear
        </button>
      </div>

      <TaskTable tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
};

export default TaskManager;
