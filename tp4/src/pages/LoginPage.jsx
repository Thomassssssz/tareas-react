import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";

export const LoginPage = ({ onLogin }) => {
  const { form, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(form.username);
    handleReset();
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>

        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={form.username}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 mb-6 border rounded"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Ingresar
        </button>
      </form>
    </div>
  );
};
