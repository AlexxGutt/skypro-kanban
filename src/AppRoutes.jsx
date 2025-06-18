import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ExitPage from "./pages/ExitPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NewCard from "./pages/NewCard";
import CardPage from "./pages/CardPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useCallback, useEffect, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivatRoute";
import { fetchTasks } from "./services/getTasks";

function AppRoutes() {
  const [isAuth, setAuth] = useState(false);
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

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route
            path="/"
            element={<MainPage loading={loading} tasks={tasks} error={error} />}
          >
            <Route path="/card/add" element={<NewCard />} />
            <Route path="/card/:id" element={<CardPage tasks={tasks} />} />
            <Route path="/exit" element={<ExitPage setAuth={setAuth} />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage setAuth={setAuth} />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default AppRoutes;
