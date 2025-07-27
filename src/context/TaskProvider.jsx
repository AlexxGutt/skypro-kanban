import { useCallback, useEffect, useState } from "react";
import { TaskContext } from "./TaskContext";
import { addTask, deleteTask, fetchTasks } from "../services/getTasks";

const TaskProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const getTasks = useCallback(async () => {
    try {
      setLoading(true);
      const userShow = JSON.parse(localStorage.getItem("userInfo"));
      const data = await fetchTasks({
        token: `${userShow.token}`,
      });
      if (data) setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const handleAddTask = async (newTask) => {
    try {
      setLoading(true);
      await addTask(newTask);
      await getTasks();
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      setLoading(true);
      await deleteTask(taskId);
      await getTasks();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        loading,
        tasks,
        error,
        addTask: handleAddTask,
        deleteTask: handleDeleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
