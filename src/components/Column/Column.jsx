import Card from "../Card/Card";
import ColumnTitle from "../ColumnTitle/ColumnTitle";

function Column({ column, cards }) {
  return (
    <>
      <div className="main__column column">
        <ColumnTitle topic={column.topic} />

        <div className="cards">
          {cards.map((card) => (
            <Card cardData={card} columnData={column} key={card.id} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Column;
