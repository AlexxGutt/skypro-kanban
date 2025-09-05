import { useNavigate } from "react-router-dom";
import * as S from "./PopBrowse.style";
import Calendar from "../Calendar/Calendar";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import { editTask } from "../../services/getTasks";
import { parseISO } from "date-fns";

function PopBrowse({ cardId }) {
  const navigate = useNavigate();
  const { tasks, deleteTask, getTasks } = useContext(TaskContext);
  const [card, setCard] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editedDescription, setEditedDescription] = useState("");
  const [editedStatus, setEditedStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [descriptionError, setDescriptionError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const statusOptions = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const validateDescription = (description) => {
    if (!description.trim()) {
      return "Описание задачи обязательно";
    }
    if (/^\s+$/.test(description)) {
      return "Описание не может состоять только из пробелов";
    }
    if (description.trim().length < 5) {
      return "Описание должно содержать минимум 5 символов";
    }
    return "";
  };

  const showError = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setEditedDescription(value);
    setCard((prev) => ({ ...prev, description: value }));

    if (isEdit) {
      const error = validateDescription(value);
      setDescriptionError(error);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleEditClick = () => {
    setIsEdit(true);
    const error = validateDescription(editedDescription);
    setDescriptionError(error);
  };

  const handleCancelClick = () => {
    setIsEdit(false);
    setDescriptionError("");
    if (card && card.date) {
      setSelectedDate(parseISO(card.date));
    }
    if (card) {
      setEditedDescription(card.description || "");
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!tasks) return;
    const foundCard = tasks.find((card) => card._id === cardId);

    if (!foundCard) {
      navigate("/", { replace: true });
      return;
    }

    setCard(foundCard);
    setEditedDescription(foundCard.description || "");
    setEditedStatus(foundCard.status || "");

    if (foundCard.date) {
      setSelectedDate(parseISO(foundCard.date));
    }
  }, [tasks, cardId, navigate]);

  const handleSave = async () => {
    const error = validateDescription(editedDescription);
    if (error) {
      setDescriptionError(error);
      return;
    }

    try {
      await editTask(
        cardId,
        card.title,
        editedDescription.trim(),
        editedStatus,
        card.topic,
        selectedDate
      );
      await getTasks();
      setIsEdit(false);
      setDescriptionError("");
    } catch {
      showError("Ошибка при сохранении задачи. Попробуйте еще раз.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(cardId);
      navigate("/", { replace: true });
    } catch {
      showError("Ошибка при удалении задачи. Попробуйте еще раз.");
      await getTasks();
    }
  };

  if (!card) {
    return null;
  }

  return (
    <>
      {errorMessage && (
        <S.ErrorNotification>
          {errorMessage}
          <S.CloseErrorButton onClick={() => setErrorMessage("")}>
            ×
          </S.CloseErrorButton>
        </S.ErrorNotification>
      )}
      <S.popBrowse>
        <S.popBrowseContainer>
          <S.popBbrowseBlock>
            <S.popBrowseContent>
              <S.popBrowseTopBlock>
                <S.popBrowseTtl>{card.title}</S.popBrowseTtl>
                <S.categoriesThemeTopActiveCategory $topic={card.topic}>
                  <p>{card.topic}</p>
                </S.categoriesThemeTopActiveCategory>
              </S.popBrowseTopBlock>

              <S.status>
                <S.statusPSubttl>Статус</S.statusPSubttl>
                {!isEdit && (
                  <S.currentStatus>
                    <p>{card.status}</p>
                  </S.currentStatus>
                )}
                {isEdit && (
                  <S.statusThemes>
                    {statusOptions.map((status) => (
                      <S.statusOption
                        key={status}
                        $isActive={editedStatus === status}
                        onClick={() => setEditedStatus(status)}
                      >
                        <p>{status}</p>
                      </S.statusOption>
                    ))}
                  </S.statusThemes>
                )}
              </S.status>

              <S.popBrowseWrap>
                <S.popBrowseForm>
                  <S.formBrowseBlock>
                    <S.subttl>Описание задачи</S.subttl>
                    <S.formBrowseArea
                      name="text"
                      id="textArea01"
                      readOnly={!isEdit}
                      value={editedDescription}
                      onChange={handleDescriptionChange}
                      placeholder="Введите описание задачи"
                      $hasError={!!descriptionError && isEdit}
                    ></S.formBrowseArea>
                    {isEdit && descriptionError && (
                      <S.ErrorMessage>{descriptionError}</S.ErrorMessage>
                    )}
                  </S.formBrowseBlock>
                </S.popBrowseForm>
                <Calendar
                  selectedDate={selectedDate}
                  onDateChange={handleDateChange}
                  isReadOnly={!isEdit}
                />
              </S.popBrowseWrap>
              <S.popBrowseBtnBrowse $type="browse" $isEdit={isEdit}>
                <S.btnGroup>
                  <S.btnBor onClick={handleEditClick}>
                    Редактировать задачу
                  </S.btnBor>
                  <S.btnBor onClick={handleDelete}>Удалить задачу</S.btnBor>
                </S.btnGroup>
                <S.btnBg onClick={handleClose}>Закрыть</S.btnBg>
              </S.popBrowseBtnBrowse>

              <S.popBrowseBtnBrowse $type="edit" $isEdit={isEdit}>
                <S.btnGroup>
                  <S.btnBg onClick={handleSave} disabled={!!descriptionError}>
                    Сохранить
                  </S.btnBg>
                  <S.btnBor onClick={handleCancelClick}>Отменить</S.btnBor>
                  <S.btnBor onClick={handleDelete}>Удалить задачу</S.btnBor>
                </S.btnGroup>
                <S.btnBg onClick={handleClose}>Закрыть</S.btnBg>
              </S.popBrowseBtnBrowse>
            </S.popBrowseContent>
          </S.popBbrowseBlock>
        </S.popBrowseContainer>
      </S.popBrowse>
    </>
  );
}

export default PopBrowse;
