import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const PrivateRoutes = ({ isLogged, onLogout }) => {
  return isLogged ? (
    <>
      <Navbar onLogout={onLogout} />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};
