import Column from "../Column/Column";
import { dataColumn } from "../../dataColumn";
import { cards } from "../../data";

function MainContent() {
  return (
    <>
      {dataColumn.map((column) => {
        const filterCards = cards.filter(
          (card) => card.status === column.topic
        );
        return <Column column={column} key={column.id} cards={filterCards} />;
      })}
    </>
  );
}
export default MainContent;
