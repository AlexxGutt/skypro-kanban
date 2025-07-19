import { TaskContext } from "./TaskContext";
const TaskProvider = ({ children }) => {
  return <TaskContext.Provider>{children}</TaskContext.Provider>;
};

export default TaskProvider;
