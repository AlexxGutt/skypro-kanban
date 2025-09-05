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

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [errors, setErrors] = useState({
    title: "",
    description: "",
  });
  const [formError, setFormError] = useState("");

  const handleClose = () => {
    navigate(-1);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      title: "",
      description: "",
    };

    if (!formData.title.trim()) {
      newErrors.title = "Название задачи обязательно";
      isValid = false;
    } else if (formData.title.trim().length < 3) {
      newErrors.title = "Название должно содержать минимум 3 символа";
      isValid = false;
    } else if (/^\s+$/.test(formData.title)) {
      newErrors.title = "Название не может состоять только из пробелов";
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = "Описание задачи обязательно";
      isValid = false;
    } else if (formData.description.trim().length < 5) {
      newErrors.description = "Описание должно содержать минимум 5 символов";
      isValid = false;
    } else if (/^\s+$/.test(formData.description)) {
      newErrors.description = "Описание не может состоять только из пробелов";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      setFormError("Пожалуйста, исправьте ошибки в форме");

      if (newErrors.title) {
        document.getElementById("formTitle")?.focus();
      } else if (newErrors.description) {
        document.getElementById("textArea")?.focus();
      }
    } else {
      setFormError("");
    }

    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
    if (formError) {
      setFormError("");
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await addTask({
        title: formData.title.trim(),
        description: formData.description.trim(),
        topic: formData.category,
        date: selectedDate,
      });
      navigate("/");
    } catch (err) {
      setFormError(err.message);
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
      {formError && <S.errorMessage>{formError}</S.errorMessage>}
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
                      $hasError={!!errors.title}
                    />
                    {errors.title && (
                      <S.ErrorMessage>{errors.title}</S.ErrorMessage>
                    )}
                  </S.formNewBlock>
                  <S.formNewBlock>
                    <S.Subttl htmlFor="textArea">Описание задачи</S.Subttl>
                    <S.formNewArea
                      name="description"
                      id="textArea"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Введите описание задачи..."
                      $hasError={!!errors.description}
                    ></S.formNewArea>
                    {errors.description && (
                      <S.ErrorMessage>{errors.description}</S.ErrorMessage>
                    )}
                  </S.formNewBlock>
                </S.popNewCardForm>
                <Calendar
                  selectedDate={selectedDate}
                  onDateChange={handleDateChange}
                />
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
