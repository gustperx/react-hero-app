import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/marvel", {
      replace: true,
    });
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <hr />

      <button
        className="bg-blue-400 px-2 py-1 rounded-md"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};
