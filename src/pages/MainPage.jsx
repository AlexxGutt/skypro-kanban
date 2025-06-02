import { useEffect, useState } from "react";
import Main from "../components/Main/Main";
import { Wrapper } from "../App.style";
import Header from "../components/Header/Header";
import { GlobalStyle } from "../Global.style";
import { Outlet } from "react-router-dom";

function MainPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaderShown = localStorage.getItem("loaderShown");
    if (loaderShown) {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem("loaderShown", "true");
      }, 3500);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Main loading={loading} />
      </Wrapper>
      <Outlet />
    </>
  );
}

export default MainPage;
