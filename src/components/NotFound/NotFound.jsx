import { GlobalStyle } from "../../Global.style";

function NotFound() {
  return (
    <>
      <GlobalStyle />
      <div className="not-found">
        <h1>404</h1>
        <p>Страница не найдена</p>
        <a href="/" className="home-link">
          На главную
        </a>
      </div>
    </>
  );
}

export default NotFound;
