import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopUp/PopBrowse";
import PopExit from "./components/PopUp/PopExit";
import PopNewCard from "./components/PopUp/PopNewCard";
import { useState, useEffect } from "react";
import { Wrapper } from "./App.style";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <>
      <Wrapper>
        {/* <!-- pop-up start--> */}
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* <!-- pop-up end--> */}

        <Header />
        <Main loading={loading} />
      </Wrapper>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
