import { Link } from "react-router-dom";
import { GlobalStyle } from "../../Global.style";
import * as S from "./PopExit.style";
function PopExit() {
  return (
    <>
      <GlobalStyle />
      <S.popExit>
        <S.popExitConteiner>
          <S.popExitBlock>
            <S.popExitTll>
              <h2>Выйти из аккаунта?</h2>
            </S.popExitTll>
            <S.popExitForm>
              <S.popExitFormGroup>
                <S.popExitExitYes>
                  <Link to="/login">Да, выйти</Link>
                </S.popExitExitYes>
                <S.popExitExitNo>
                  <Link to="/">Нет, остаться</Link>
                </S.popExitExitNo>
              </S.popExitFormGroup>
            </S.popExitForm>
          </S.popExitBlock>
        </S.popExitConteiner>
      </S.popExit>
    </>
  );
}

export default PopExit;
