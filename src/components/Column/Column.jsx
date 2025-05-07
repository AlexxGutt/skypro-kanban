import Card from "../Card/Card";
import ColumnTitle from "../ColumnTitle/ColumnTitle";
import * as S from "./Column.style";
function Column({ column, cards }) {
  return (
    <>
      <S.mainColumn>
        <ColumnTitle topic={column.topic} />

        <S.cards>
          {cards.map((card) => (
            <Card cardData={card} columnData={column} key={card.id} />
          ))}
        </S.cards>
      </S.mainColumn>
    </>
  );
}
export default Column;
