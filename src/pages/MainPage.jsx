import Main from "../components/Main/Main";
import { Wrapper } from "../App.style";
import Header from "../components/Header/Header";
import { GlobalStyle } from "../Global.style";
import { Outlet } from "react-router-dom";
import TaskProvider from "../context/TaskProvider";

function MainPage() {
  return (
    <>
      <GlobalStyle />
      <TaskProvider>
        <Wrapper>
          <Header />
          <Main />
        </Wrapper>
        <Outlet />
      </TaskProvider>
    </>
  );
}

export default MainPage;
