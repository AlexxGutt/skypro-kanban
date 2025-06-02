import { Link } from "react-router-dom";
import { GlobalStyle } from "../../Global.style";

function Login() {
  return (
    <>
      <GlobalStyle />
      <div class="wrapper">
        <div class="container-signin">
          <div class="modal">
            <div class="modal__block">
              <div class="modal__ttl">
                <h2>Вход</h2>
              </div>
              <form class="modal__form-login" id="formLogIn" action="#">
                <input
                  class="modal__input"
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <input
                  class="modal__input"
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <button class="modal__btn-enter _hover01" id="btnEnter">
                  <a href="/">Войти</a>
                </button>
                <div class="modal__form-group">
                  <p>Нужно зарегистрироваться?</p>
                  <Link to="/registration">Регистируйтесь здесь</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
