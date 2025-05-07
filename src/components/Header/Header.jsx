import PopUserSet from "../PopUp/PopUserSet";
import { useState } from "react";
import * as S from "./Header.style";
function Header() {
  const [isOpen, setisOpen] = useState(false);
  const isClose = () => {
    setisOpen(false);
  };
  return (
    <S.header>
      <S.conteiner>
        <S.headerBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <a
              className="header__user _hover02"
              onClick={() => setisOpen(true)}
            >
              Ivan Ivanov
            </a>
            {isOpen ? <PopUserSet isClose={isClose} /> : ""}
          </nav>
        </S.headerBlock>
      </S.conteiner>
    </S.header>
  );
}

export default Header;
