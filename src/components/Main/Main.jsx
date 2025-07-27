import { useContext } from "react";
import Loader from "../Loader/Loader";
import MainContent from "../MainContent/MainContent";
import * as S from "./Main.style";
import { TaskContext } from "../../context/TaskContext";

function Main() {
  const { loading } = useContext(TaskContext);
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
