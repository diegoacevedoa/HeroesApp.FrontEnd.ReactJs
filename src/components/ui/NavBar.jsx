import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const Navbar = () => {
  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);
  let navigate = useNavigate();

  const handleLogout = () => {
    //Logout en authReducer
    const newAction = {
      type: types.logout,
    };

    dispatch(newAction);

    navigate("/auth/login");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/app/">
        Asociaciones
      </Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink end className="nav-item nav-link" to="/app/">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="/app/marvel">
            Marvel
          </NavLink>
          <NavLink className="nav-item nav-link" to="/app/dc">
            DC
          </NavLink>
          <NavLink className="nav-item nav-link" to="/app/search">
            Search
          </NavLink>
        </div>
      </div>
      <div className="collapse navbar-collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ms-auto">
          <span className="nav-item nav-link text-info">{name}</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
