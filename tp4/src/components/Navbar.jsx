import { useNavigate } from "react-router-dom";

export const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    onLogout();
    navigate("/login");
  };

  return (
    <nav className="bg-yellow-300 p-4 flex justify-between">
      <h2 className="font-bold text-blue-800 text-xl">API Dragon Ball</h2>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/home")}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Hogar
        </button>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          sesión
        </button>
      </div>
    </nav>
  );
};
