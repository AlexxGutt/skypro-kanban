import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../../Global.style";
import Calendar from "../Calendar/Calendar";
import { useContext, useRef, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

function PopNewCard() {
  const { addTask } = useContext(TaskContext);
  const formRef = useRef();
  const handleBattonClick = () => {
    formRef.current.dispatchEvent(new Event("submit", { cancelable: true }));
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Web Design",
  });

  const [errors, setErrors] = useState({
    title: false,
    description: false,
  });

  const [error, setError] = useState("");

  const handleClose = () => {
    navigate(-1);
  };

  const validateForm = () => {
    const newErrors = {
      title: !formData.title.trim(),
      description: !formData.description.trim(),
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
      await addTask({
        title: formData.title,
        description: formData.description,
      });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <GlobalStyle />
      {error && (
        <div className="error-message" style={{ color: "red" }}>
          {error}
        </div>
      )}
      <div className="pop-new-card" id="popNewCard">
        <div className="pop-new-card__container">
          <div className="pop-new-card__block">
            <div className="pop-new-card__content">
              <h3 className="pop-new-card__ttl">Создание задачи</h3>
              <a className="pop-new-card__close" onClick={handleClose}>
                &#10006;
              </a>
              <div className="pop-new-card__wrap">
                <form
                  ref={formRef}
                  className="pop-new-card__form form-new"
                  id="formNewCard"
                  onSubmit={handleSubmit}
                >
                  <div className="form-new__block">
                    <label htmlFor="formTitle" className="subttl">
                      Название задачи
                    </label>
                    <input
                      className="form-new__input"
                      type="text"
                      name="title"
                      id="formTitle"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Введите название задачи..."
                      autoFocus
                    />
                  </div>
                  <div className="form-new__block">
                    <label htmlFor="textArea" className="subttl">
                      Описание задачи
                    </label>
                    <textarea
                      className="form-new__area"
                      name="description"
                      id="textArea"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Введите описание задачи..."
                    ></textarea>
                  </div>
                </form>
                <Calendar />
              </div>
              <div className="pop-new-card__categories categories">
                <p className="categories__p subttl">Категория</p>
                <div className="categories__themes">
                  <div className="categories__theme _orange _active-category">
                    <p className="_orange">Web Design</p>
                  </div>
                  <div className="categories__theme _green">
                    <p className="_green">Research</p>
                  </div>
                  <div className="categories__theme _purple">
                    <p className="_purple">Copywriting</p>
                  </div>
                </div>
                <button
                  className="form-new__create _hover01"
                  id="btnCreate"
                  type="submit"
                  form="formNewCard"
                  onClick={handleBattonClick}
                >
                  Создать задачу
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopNewCard;
