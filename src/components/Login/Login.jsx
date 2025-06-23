import { Link, useNavigate } from "react-router-dom";
import { GlobalStyle } from "../../Global.style";
import * as S from "./Login.style";
import { singIn } from "../../services/auth";
import { useState } from "react";
function Login({ setAuth }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    login: false,
    password: false,
  });

  const [error, setError] = useState("");

  const validateForm = () => {
    const newErrors = {
      login: !formData.login.trim(),
      password: !formData.password.trim(),
    };

    setErrors(newErrors);
    setError(
      Object.values(newErrors).some(Boolean) ? "Заполните все поля" : ""
    );

    return !Object.values(newErrors).some(Boolean);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const data = await singIn({
        login: formData.login,
        password: formData.password,
      });
      if (data) {
        setAuth(true);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
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
              {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
              <S.modalFormLogin onSubmit={handleSubmit}>
                <S.modalInput
                  error={errors.login.toString()}
                  type="text"
                  name="login"
                  id="login"
                  placeholder="Эл. почта"
                  value={formData.login}
                  onChange={handleChange}
                />
                <S.modalInput
                  error={errors.password.toString()}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Пароль"
                  value={formData.password}
                  onChange={handleChange}
                />
                <S.modalBtnEnt type="submit">Войти</S.modalBtnEnt>
                <S.modalFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to="/registration">Регистрируйтесь здесь</Link>
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
