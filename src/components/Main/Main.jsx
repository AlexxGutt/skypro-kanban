import Loader from "../Loader/Loader";
import MainContent from "../MainContent/MainContent";
import * as S from "./Main.style";

function Main({ loading }) {
  return (
    <>
      <S.main>
        <S.conteiner>
          <S.mainBlock>
            <S.mainContent>
              {loading ? <Loader /> : <MainContent />}
            </S.mainContent>
          </S.mainBlock>
        </S.conteiner>
      </S.main>
    </>
  );
}
export default Main;
