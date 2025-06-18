import Column from "../Column/Column";
import { dataColumn } from "../../dataColumn";
// import { cards } from "../../data";

function MainContent({ tasks, error }) {
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
