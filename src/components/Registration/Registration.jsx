import { Link } from "react-router-dom";
import { GlobalStyle } from "../../Global.style";
import * as S from "./Registration.style";
function Registration() {
  return (
    <>
      <GlobalStyle />
      <S.wrapper>
        <S.containerSingUp>
          <S.modal>
            <S.modalBlock>
              <S.modalTtl>
                <h2>Регистрация</h2>
              </S.modalTtl>
              <S.modalFormLogin>
                <S.modalInput
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
                <S.modalInput
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                />
                <S.modalInput
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                <S.modalBtnSingUpEnt>
                  <Link to="/login">Зарегистрироваться</Link>
                </S.modalBtnSingUpEnt>
                <S.modalFormGroup>
                  <p>
                    Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
                  </p>
                </S.modalFormGroup>
              </S.modalFormLogin>
            </S.modalBlock>
          </S.modal>
        </S.containerSingUp>
      </S.wrapper>
    </>
  );
}

export default Registration;
