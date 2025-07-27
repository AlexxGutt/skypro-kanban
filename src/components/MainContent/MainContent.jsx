import Column from "../Column/Column";
import { dataColumn } from "../../dataColumn";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function MainContent() {
  const { tasks, error } = useContext(TaskContext);

  return (
    <>
      {dataColumn.map((column) => {
        const filterCards = tasks.filter(
          (task) => task.status === column.topic
        );
        return (
          <Column
            column={column}
            key={column.id}
            cards={filterCards}
            error={error}
          />
        );
      })}
    </>
  );
}
export default MainContent;
