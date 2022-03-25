import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { user, dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: {
        name: "gustperx",
        email: "hola@email.com",
      },
    };

    dispatch(action);

    const lastPath = localStorage.getItem("lastPath") || "/marvel";

    navigate(lastPath, {
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
