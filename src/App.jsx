import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopUp/PopBrowse";
import PopExit from "./components/PopUp/PopExit";
import PopNewCard from "./components/PopUp/PopNewCard";

function App() {
  return (
    <>
      <div class="wrapper">
        {/* <!-- pop-up start--> */}
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* <!-- pop-up end--> */}

        <Header />
        <Main />
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
