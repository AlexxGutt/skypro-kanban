import * as S from "./ColumnTitle.style";
function ColumnTitle({ topic }) {
  return (
    <>
      <S.columnTitle>
        <p>{topic}</p>
      </S.columnTitle>
    </>
  );
}
export default ColumnTitle;
