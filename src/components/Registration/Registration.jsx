import { Link, useNavigate } from "react-router-dom";
import { GlobalStyle } from "../../Global.style";
import * as S from "./Registration.style";
import { useState } from "react";
import { singUp } from "../../services/auth";
function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    login: false,
    password: false,
  });

  const [error, setError] = useState("");

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
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
      await singUp(formData);
      navigate("/login");
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
                <h2>Регистрация</h2>
              </S.modalTtl>
              {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
              <S.modalFormLogin onSubmit={handleSubmit}>
                <S.modalInput
                  error={errors.name.toString()}
                  type="text"
                  name="name"
                  id="first-name"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                />
                <S.modalInput
                  error={errors.login.toString()}
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                  value={formData.login}
                  onChange={handleChange}
                />
                <S.modalInput
                  error={errors.password.toString()}
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                  value={formData.password}
                  onChange={handleChange}
                />
                <S.modalBtnSingUpEnt type="submit">
                  Зарегистрироваться
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
