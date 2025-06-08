import { Link, useNavigate } from "react-router-dom";
import { GlobalStyle } from "../../Global.style";
import * as S from "./Login.style";
function Login({ setAuth }) {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setAuth(true);
    navigate("/");
  };

  return (
    <>
      <GlobalStyle />
      <S.wrapper>
        <S.containerSingUp>
          <S.modal>
            <S.modalBlock>
              <S.modalTtl>
                <h2>Вход</h2>
              </S.modalTtl>
              <S.modalFormLogin>
                <S.modalInput
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <S.modalInput
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <S.modalBtnEnt onClick={handleLogin}>Войти</S.modalBtnEnt>
                <S.modalFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to="/registration">Регистируйтесь здесь</Link>
                </S.modalFormGroup>
              </S.modalFormLogin>
            </S.modalBlock>
          </S.modal>
        </S.containerSingUp>
      </S.wrapper>
    </>
  );
}

export default Login;
