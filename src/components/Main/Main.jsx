import Loader from "../Loader/Loader";
import MainContent from "../MainContent/MainContent";

function Main({ loading }) {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              {loading ? <Loader /> : <MainContent />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Main;
