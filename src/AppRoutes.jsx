import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ExitPage from "./pages/ExitPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NewCard from "./pages/NewCard";
import CardPage from "./pages/CardPage";
import NotFoundPage from "./pages/NotFoundPage";

import PrivateRoute from "./components/PrivateRoute/PrivatRoute";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainPage />}>
            <Route path="/card/add" element={<NewCard />} />
            <Route path="/card/:id" element={<CardPage />} />
            <Route path="/exit" element={<ExitPage />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default AppRoutes;
