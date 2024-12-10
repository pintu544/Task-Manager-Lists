import { useEffect, useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import FilterTasks from "./components/FilterTasks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskManager from "./components/TaskManager";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      const formattedTasks = data.slice(0, 20).map((task) => ({
        id: task.id,
        title: task.title,
        description: "",
        status: task.completed ? "Done" : "To Do",
      }));
      setTasks(formattedTasks);
    };
    fetchTasks();
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    toast.success("Task added successfully!");
  };

  const filteredTasks =
    filterStatus === "All"
      ? tasks
      : tasks.filter((task) => task.status === filterStatus);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Task List Manager</h1>
      <FilterTasks
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      <AddTaskForm addTask={addTask} />
      <TaskManager tasks={filteredTasks} setTasks={setTasks} />
      <ToastContainer />
    </div>
  );
};

export default App;
