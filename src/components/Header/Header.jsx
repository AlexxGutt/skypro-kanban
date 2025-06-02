import PopUserSet from "../PopUp/PopUserSet";
import { useState } from "react";
import * as S from "./Header.style";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setisOpen] = useState(false);
  const isClose = () => {
    setisOpen(false);
  };
  return (
    <S.header>
      <S.conteiner>
        <S.headerBlock>
          <S.headerLogo>
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </S.headerLogo>
          <S.headerLogo>
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </S.headerLogo>
          <S.headerNav>
            <S.headerBtnMainNew>
              <Link to="/card/add">Создать новую задачу</Link>
            </S.headerBtnMainNew>
            <S.headerUser onClick={() => setisOpen(true)}>
              Ivan Ivanov
            </S.headerUser>
            {isOpen ? <PopUserSet isClose={isClose} /> : ""}
          </S.headerNav>
        </S.headerBlock>
      </S.conteiner>
    </S.header>
  );
}

export default Header;
