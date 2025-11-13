import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = ({ isLogged }) => {
  return !isLogged ? <Outlet /> : <Navigate to="/home" />;
};
