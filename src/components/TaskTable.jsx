import { useEffect, useRef } from "react";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator.min.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TaskTable = ({ tasks, setTasks }) => {
  const tableRef = useRef(null);
  const tabulatorInstance = useRef(null);

  useEffect(() => {
    tabulatorInstance.current = new Tabulator(tableRef.current, {
      layout: "fitColumns",
      columns: [
        { title: "ID", field: "id", width: 50 },
        {
          title: "Title",
          field: "title",
          editor: "input",
          cellEdited: handleCellEdited,
        },
        {
          title: "Description",
          field: "description",
          editor: "textarea",
          cellEdited: handleCellEdited,
        },
        {
          title: "Status",
          field: "status",
          editor: "select",
          editorParams: { values: ["To Do", "In Progress", "Done"] },
          cellEdited: handleCellEdited,
        },
        {
          formatter: "buttonCross",
          width: 50,
          align: "center",
          cellClick: (e, cell) => {
            const rowData = cell.getRow().getData();
            handleDelete(rowData.id);
          },
        },
      ],
    });

    return () => {
      // Cleanup on unmount
      tabulatorInstance.current?.destroy();
      tabulatorInstance.current = null;
    };
  }, []);

  useEffect(() => {
    if (tabulatorInstance.current) {
      tabulatorInstance.current.replaceData(tasks);
    }
  }, [tasks]);

  const handleCellEdited = (cell) => {
    const updatedTask = cell.getRow().getData();
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    toast.success("Task deleted successfully!");
  };

  return <div ref={tableRef}></div>;
};

export default TaskTable;
