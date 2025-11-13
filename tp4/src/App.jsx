import { useState } from "react";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLogged") === "true"
  );

  const handleLogin = () => {
    localStorage.setItem("isLogged", "true");
    setIsLogged(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    setIsLogged(false);
  };

  return (
    <AppRouter
      isLogged={isLogged}
      onLogin={handleLogin}
      onLogout={handleLogout}
    />
  );
};
