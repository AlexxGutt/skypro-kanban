import Card from "../Card/Card";
import ColumnTitle from "../ColumnTitle/ColumnTitle";

function Column({ column }) {
  return (
    <>
      <div className="main__column column">
        <ColumnTitle topic={column.topic} />

        <div className="cards">
          {column.cards.map((card) => (
            <Card cardData={card} key={card.id} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Column;
