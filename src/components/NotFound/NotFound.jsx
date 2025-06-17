import { Link } from "react-router-dom";
import * as S from "./NotFound.style";
function NotFound() {
  return (
    <>
      <S.notFound>
        <h1>404</h1>
        <p>Страница не найдена</p>
        <Link to="/">
          <S.homeLink>На главную</S.homeLink>
        </Link>
      </S.notFound>
    </>
  );
}

export default NotFound;
