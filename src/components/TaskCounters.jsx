const TaskCounters = ({ tasks }) => {
  const statusCounts = tasks.reduce(
    (counts, task) => {
      counts[task.status] = (counts[task.status] || 0) + 1;
      return counts;
    },
    { "To Do": 0, "In Progress": 0, Done: 0 }
  );

  return (
    <div className="flex justify-around mb-4">
      <div className="p-6 bg-blue-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <p className="text-lg font-semibold text-blue-800">To Do</p>
        <p className="text-3xl font-bold text-blue-900">
          {statusCounts["To Do"]}
        </p>
      </div>
      <div className="p-6 bg-yellow-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <p className="text-lg font-semibold text-yellow-800">In Progress</p>
        <p className="text-3xl font-bold text-yellow-900">
          {statusCounts["In Progress"]}
        </p>
      </div>
      <div className="p-6 bg-green-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <p className="text-lg font-semibold text-green-800">Done</p>
        <p className="text-3xl font-bold text-green-900">
          {statusCounts["Done"]}
        </p>
      </div>
    </div>
  );
};

export default TaskCounters;
