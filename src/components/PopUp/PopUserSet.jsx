import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalStyle } from "../../Global.style";
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
  const userData = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <>
      <GlobalStyle />
      <div className="header__pop-user-set pop-user-set" id="user-set-target">
        <a className="close-position" onClick={isClose}>
          x
        </a>
        <p className="pop-user-set__name">{userData.name}</p>
        <p className="pop-user-set__mail">{userData.login}</p>
        <div className="pop-user-set__theme">
          <p>Темная тема</p>
          <input type="checkbox" className="checkbox" name="checkbox" />
        </div>
        <button type="button" className="_hover03">
          <Link to="/exit">Выйти</Link>
        </button>
      </div>
    </>
  );
}
export default PopUserSet;
