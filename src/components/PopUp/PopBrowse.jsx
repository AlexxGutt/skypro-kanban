import { useNavigate } from "react-router-dom";
import * as S from "./PopBrowse.style";
import Calendar from "../Calendar/Calendar";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import { editTask } from "../../services/getTasks";

function PopBrowse({ cardId }) {
  const navigate = useNavigate();
  const { tasks, deleteTask, getTasks } = useContext(TaskContext);
  const [card, setCard] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editedDescription, setEditedDescription] = useState("");
  const [editedStatus, setEditedStatus] = useState("");

  const statusOptions = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
    setCard((prev) => ({ ...prev, description: e.target.value }));
  };
  const handleEditClick = () => {
    setIsEdit(true);
  };
  const handleCancelClick = () => {
    setIsEdit(false);
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
  }, [tasks, cardId, navigate]);

  const handleSave = async () => {
    try {
      await editTask(
        cardId,
        card.title,
        editedDescription,
        editedStatus,
        card.topic
      );
      await getTasks();
      setIsEdit(false);
    } catch (err) {
      console.log("Ошибка сохранения", err);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(cardId);
      navigate("/", { replace: true });
    } catch (err) {
      console.error("Ошибка удаления", err);
      await getTasks();
    }
  };
  if (!card) {
    return null;
  }

  return (
    <>
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
                {/* Выбор статуса*/}
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
                    ></S.formBrowseArea>
                  </S.formBrowseBlock>
                </S.popBrowseForm>
                <Calendar />
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
                  <S.btnBg onClick={handleSave}>Сохранить</S.btnBg>
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
