import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

export const AppRouter = ({ isLogged, onLogin, onLogout }) => {
  return (
    <Routes>
      {/* rutas públicas */}
      <Route element={<PublicRoutes isLogged={isLogged} />}>
        <Route path="login" element={<LoginPage onLogin={onLogin} />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      {/* rutas privadas */}
      <Route
        element={<PrivateRoutes isLogged={isLogged} onLogout={onLogout} />}
      >
        <Route path="home" element={<HomePage />} />
      </Route>

      {/* cualquier otra ruta */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
