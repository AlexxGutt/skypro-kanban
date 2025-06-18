import { useCallback, useEffect, useState } from "react";
import Main from "../components/Main/Main";
import { Wrapper } from "../App.style";
import Header from "../components/Header/Header";
import { GlobalStyle } from "../Global.style";
import { Outlet } from "react-router-dom";
import { fetchTasks } from "../services/getTasks";

function MainPage() {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const getTasks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchTasks({
        token: "",
      });
      if (data) setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  console.log(tasks);
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
