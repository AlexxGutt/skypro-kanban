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
      await editTask(cardId, card.title, editedDescription, editedStatus);
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
                <S.statusThemes>
                  {/* Текущий статус*/}
                  {!isEdit && (
                    <div
                      className="status__theme _gray"
                      style={{
                        backgroundColor: "#94A6BE",
                        color: "#ffffff",
                        padding: "11px 14px 10px",
                        borderRadius: "24px",
                        border: "0.7px solid rgba(148, 166, 190, 0.4)",
                      }}
                    >
                      <p
                        style={{
                          color: "#ffffff",
                          margin: 0,
                          fontSize: "14px",
                        }}
                      >
                        {card.status}
                      </p>
                    </div>
                  )}
                  {/* Выбор статуса*/}
                  {isEdit &&
                    statusOptions.map((status) => (
                      <div
                        key={status}
                        className={`status__theme ${
                          editedStatus === status ? "_active-status" : ""
                        }`}
                        onClick={() => setEditedStatus(status)}
                        style={{
                          cursor: "pointer",
                          backgroundColor:
                            editedStatus === status ? "#94A6BE" : "transparent",
                          color: editedStatus === status ? "white" : "#94a6be",
                        }}
                      >
                        <p>{status}</p>
                      </div>
                    ))}
                </S.statusThemes>
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
              <div
                className={`pop-browse__btn-browse ${isEdit ? "_hide" : ""}`}
              >
                <div className="btn-group">
                  <button
                    className="btn-browse__edit _btn-bor _hover03"
                    onClick={handleEditClick}
                  >
                    Редактировать задачу
                  </button>
                  <button
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={handleDelete}
                  >
                    Удалить задачу
                  </button>
                </div>
                <button
                  className="btn-browse__close _btn-bg _hover01"
                  onClick={handleClose}
                >
                  Закрыть
                </button>
              </div>

              <div className={`pop-browse__btn-edit ${isEdit ? "" : "_hide"}`}>
                <div className="btn-group">
                  <button
                    className="btn-edit__edit _btn-bg _hover01"
                    onClick={handleSave}
                  >
                    Сохранить
                  </button>
                  <button
                    className="btn-edit__edit _btn-bor _hover03"
                    onClick={handleCancelClick}
                  >
                    Отменить
                  </button>
                  <button
                    className="btn-edit__delete _btn-bor _hover03"
                    onClick={handleDelete}
                  >
                    Удалить задачу
                  </button>
                </div>
                <button
                  className="btn-edit__close _btn-bg _hover01"
                  onClick={handleClose}
                >
                  Закрыть
                </button>
              </div>
            </S.popBrowseContent>
          </S.popBbrowseBlock>
        </S.popBrowseContainer>
      </S.popBrowse>
    </>
  );
}

export default PopBrowse;
