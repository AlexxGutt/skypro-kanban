import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../../Global.style";
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
  }, [tasks, cardId, navigate]);

  const handleSave = async () => {
    try {
      await editTask(cardId, editedDescription);
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
      <GlobalStyle />
      <div className="pop-browse" id={card._id}>
        <div className="pop-browse__container">
          <div className="pop-browse__block">
            <div className="pop-browse__content">
              <div className="pop-browse__top-block">
                <h3 className="pop-browse__ttl">{card.title}</h3>
                <div className="categories__theme theme-top _orange _active-category">
                  <p className="_orange">{card.topic}</p>
                </div>
              </div>
              <div className="pop-browse__status status">
                <p className="status__p subttl">Статус</p>
                <div className="status__themes">
                  <div className={`status__theme ${isEdit ? "" : "_hide"}`}>
                    <p>Без статуса</p>
                  </div>
                  <div className="status__theme _gray">
                    <p className="_gray">{card.status}</p>
                  </div>
                  <div className={`status__theme ${isEdit ? "" : "_hide"}`}>
                    <p>В работе</p>
                  </div>
                  <div className={`status__theme ${isEdit ? "" : "_hide"}`}>
                    <p>Тестирование</p>
                  </div>
                  <div className={`status__theme ${isEdit ? "" : "_hide"}`}>
                    <p>Готово</p>
                  </div>
                </div>
              </div>
              <div className="pop-browse__wrap">
                <form
                  className="pop-browse__form form-browse"
                  id="formBrowseCard"
                  action="#"
                >
                  <div className="form-browse__block">
                    <label htmlFor="textArea01" className="subttl">
                      Описание задачи
                    </label>
                    <textarea
                      className="form-browse__area"
                      name="text"
                      id="textArea01"
                      readOnly={!isEdit}
                      value={card?.description || ""}
                      onChange={isEdit ? handleDescriptionChange : undefined}
                      placeholder={
                        card?.description || "Введите описание задачи"
                      }
                    ></textarea>
                  </div>
                </form>
                <Calendar />
              </div>
              <div className="theme-down__categories theme-down">
                <p className="categories__p subttl">Категория</p>
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
              </div>
              <div
                className={`pop-browse__btn-browse ${isEdit ? "_hide" : ""}`}
              >
                <div className="btn-group">
                  <button
                    className="btn-browse__edit _btn-bor _hover03"
                    onClick={handleEditClick}
                  >
                    <a href="#">Редактировать задачу</a>
                  </button>
                  <button
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={handleDelete}
                  >
                    Удалить задачу
                  </button>
                </div>
                <button className="btn-browse__close _btn-bg _hover01">
                  <a onClick={handleClose}>Закрыть</a>
                </button>
              </div>
              <div className={`pop-browse__btn-edit ${isEdit ? "" : "_hide"}`}>
                <div className="btn-group">
                  <button
                    className="btn-edit__edit _btn-bg _hover01"
                    onClick={handleSave}
                  >
                    <a href="#">Сохранить</a>
                  </button>
                  <button
                    className="btn-edit__edit _btn-bor _hover03"
                    onClick={handleCancelClick}
                  >
                    <a href="#">Отменить</a>
                  </button>
                  <button
                    className="btn-edit__delete _btn-bor _hover03"
                    id="btnDelete"
                    onClick={handleDelete}
                  >
                    Удалить задачу
                  </button>
                </div>
                <button
                  className="btn-edit__close _btn-bg _hover01"
                  onClick={handleClose}
                >
                  <a href="#">Закрыть</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopBrowse;
