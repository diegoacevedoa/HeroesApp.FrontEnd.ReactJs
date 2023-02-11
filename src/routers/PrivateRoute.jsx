import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ isAuthenticated, children }) => {
  const location = useLocation();

  localStorage.setItem("lastPath", location.pathname);

  return isAuthenticated ? children : <Navigate to="/auth/login" />;
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
};
