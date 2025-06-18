import Main from "../components/Main/Main";
import { Wrapper } from "../App.style";
import Header from "../components/Header/Header";
import { GlobalStyle } from "../Global.style";
import { Outlet } from "react-router-dom";

function MainPage({ loading, tasks, error }) {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Main loading={loading} tasks={tasks} error={error} />
      </Wrapper>
      <Outlet />
    </>
  );
}

export default MainPage;
