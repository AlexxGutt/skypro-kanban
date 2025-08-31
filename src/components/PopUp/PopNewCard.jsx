import { useNavigate } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import { useContext, useRef, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import * as S from "./PopNewCard.style";

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
        topic: formData.category,
      });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const topicColor = {
    "Web Design": { backgroundColor: "#ffe4c2", color: "#ff6d00" },
    "Research": { backgroundColor: "#b4fdd1", color: "#06b16e" },
    "Copywriting": { backgroundColor: "#e9d4ff", color: "#9a48f1" },
  };

  const handleCategorySelect = (category) => {
    setFormData({
      ...formData,
      category: category,
    });
  };

  return (
    <>
      {error && (
        <div className="error-message" style={{ color: "red" }}>
          {error}
        </div>
      )}
      <S.popNewCard>
        <S.popNewCardContainer>
          <S.popNewCardBlock>
            <S.popNewCardContent>
              <S.popNewCardTtl>Создание задачи</S.popNewCardTtl>
              <S.popNewCardClose onClick={handleClose}>
                &#10006;
              </S.popNewCardClose>
              <S.popNewCardWrap>
                <S.popNewCardForm
                  id="formNewCard"
                  ref={formRef}
                  onSubmit={handleSubmit}
                >
                  <S.formNewBlock>
                    <S.Subttl>Название задачи</S.Subttl>
                    <S.formNewInput
                      type="text"
                      name="title"
                      id="formTitle"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Введите название задачи..."
                      autoFocus
                    />
                  </S.formNewBlock>
                  <S.formNewBlock>
                    <S.Subttl htmlFor="textArea">Описание задачи</S.Subttl>
                    <S.formNewArea
                      name="description"
                      id="textArea"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Введите описание задачи..."
                    ></S.formNewArea>
                  </S.formNewBlock>
                </S.popNewCardForm>
                <Calendar />
              </S.popNewCardWrap>
              <S.categories>
                <S.categoriesP>Категория</S.categoriesP>
                <S.categoriesThemes>
                  {Object.keys(topicColor).map((category) => (
                    <S.categoriesTheme
                      key={category}
                      $topic={category}
                      $isActive={formData.category === category}
                      onClick={() => handleCategorySelect(category)}
                    >
                      <p>{category}</p>
                    </S.categoriesTheme>
                  ))}
                </S.categoriesThemes>
                <S.formNewCreate
                  id="btnCreate"
                  type="submit"
                  form="formNewCard"
                  onClick={handleBattonClick}
                >
                  Создать задачу
                </S.formNewCreate>
              </S.categories>
            </S.popNewCardContent>
          </S.popNewCardBlock>
        </S.popNewCardContainer>
      </S.popNewCard>
    </>
  );
}

export default PopNewCard;
