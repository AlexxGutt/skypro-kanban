import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ExitPage from "./pages/ExitPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NewCard from "./pages/NewCard";
import CardPage from "./pages/CardPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivatRoute";

function AppRoutes() {
  const [isAuth, setAuth] = useState(false);
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path="/" element={<MainPage />}>
            <Route path="/card/add" element={<NewCard />} />
            <Route path="/card/:id" element={<CardPage />} />
            <Route path="/exit" element={<ExitPage />} />
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
