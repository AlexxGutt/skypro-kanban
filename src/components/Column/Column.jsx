import Card from "../Card/Card";
import ColumnTitle from "../ColumnTitle/ColumnTitle";

function Column() {
  return (
    <>
      <div className="main__column column">
        <ColumnTitle />
        <div className="cards">
          <Card />
        </div>
      </div>
    </>
  );
}
export default Column;
