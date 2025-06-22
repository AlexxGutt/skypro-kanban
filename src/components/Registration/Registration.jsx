import { Link, useNavigate } from "react-router-dom";
import { GlobalStyle } from "../../Global.style";
import * as S from "./Registration.style";
import { useState } from "react";
import { singIn } from "../../services/auth";
function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [error, setError] = useState("");

  const validateForm = () => {
    const newErrors = { name: "", login: "", password: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = true;
      setErrors("Заполните все поля");
      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = true;
      setErrors("Заполните все поля");
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      setErrors("Заполните все поля");
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
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
      await singIn(formData);
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
              <S.modalFormLogin>
                <S.modalInput
                  error={errors.name}
                  type="text"
                  name="firstName"
                  id="first-name"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                />
                <S.modalInput
                  error={errors.login}
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                  value={formData.login}
                  onChange={handleChange}
                />
                <S.modalInput
                  error={errors.password}
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                  value={formData.password}
                  onChange={handleChange}
                />
                <S.modalBtnSingUpEnt>
                  <Link to="/login" onSubmit={handleSubmit}>
                    Зарегистрироваться
                  </Link>
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
