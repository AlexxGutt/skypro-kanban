import { useCallback, useEffect, useState } from "react";
import { TaskContext } from "./TaskContext";
import {
  addTask,
  deleteTask,
  editTask,
  fetchTasks,
} from "../services/getTasks";

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
      setTasks((prev) => prev.filter((task) => task._id !== taskId));
    } catch (err) {
      setError(err.message);
      await getTasks();
    } finally {
      setLoading(false);
    }
  };

  const handleEditTask = async (taskId, description) => {
    try {
      setLoading(true);
      await editTask(taskId, description);
      await getTasks();
    } catch (err) {
      setError(err.message);
      throw err;
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
        getTasks,
        addTask: handleAddTask,
        deleteTask: handleDeleteTask,
        editTask: handleEditTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
