import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const {
    user: { logged },
  } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Routes>
          {/* rutas públicas */}
          <Route
            path="/auth/*"
            element={
              <PublicRoute isAuthenticated={logged}>
                <LoginScreen />
              </PublicRoute>
            }
          />

          {/* rutas privadas */}
          <Route
            path="/app/*"
            element={
              <PrivateRoute isAuthenticated={logged}>
                <DashBoardRoutes />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={<Navigate to={logged ? "/app/" : "/auth/login"} />}
          />
        </Routes>
      </div>
    </Router>
  );
};
