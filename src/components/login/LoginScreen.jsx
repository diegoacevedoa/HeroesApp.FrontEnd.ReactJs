import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  const { user, dispatch } = useContext(AuthContext);
  let navigate = useNavigate();

  const handleLogin = () => {
    //Logueamos en authReducer
    const newAction = {
      type: types.login,
      payload: {
        name: "Diego",
      },
    };

    dispatch(newAction);

    //Navegar hacia la ruta /app/
    // navigate("/app/");

    //Navegar hacia la ruta /app/ y reemplazar la ruta loguin para que no se puedan devolver a ella
    // navigate("/app/", { replace: true });

    navigate(localStorage.getItem("lastPath") || "/app/", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button type="button" className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
