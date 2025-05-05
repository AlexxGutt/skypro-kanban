import { useEffect } from "react";
function PopUserSet({ isClose }) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const popUp = document.getElementById("user-set-target");
      if (popUp && !popUp.contains(event.target)) {
        isClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isClose]);

  return (
    <>
      <div className="header__pop-user-set pop-user-set" id="user-set-target">
        <a className="close-position" onClick={isClose}>
          x
        </a>
        <p className="pop-user-set__name">Ivan Ivanov</p>
        <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
        <div className="pop-user-set__theme">
          <p>Темная тема</p>
          <input type="checkbox" className="checkbox" name="checkbox" />
        </div>
        <button type="button" className="_hover03">
          <a href="#popExit">Выйти</a>
        </button>
      </div>
    </>
  );
}
export default PopUserSet;
