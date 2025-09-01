import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalStyle } from "../../Global.style";
import * as S from "./PopUserSet.style";
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
      <S.headerPopUserSet>
        <S.closePosition onClick={isClose}>x</S.closePosition>
        <S.popUserSetName>{userData.name}</S.popUserSetName>
        <S.popUserSetMail>{userData.login}</S.popUserSetMail>
        <S.popUserSetTheme>
          <p>Темная тема</p>
          <S.popUserSetInput type="checkbox" name="checkbox" />
        </S.popUserSetTheme>
        <S.popUserSetButton>
          <Link to="/exit">Выйти</Link>
        </S.popUserSetButton>
      </S.headerPopUserSet>
    </>
  );
}
export default PopUserSet;
