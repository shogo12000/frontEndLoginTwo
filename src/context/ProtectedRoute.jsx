import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
 
  if (user === null) return <p>Carregando...</p>;
 
  if (user === false) return <Navigate to="/" replace />;

  return children;
};

export const MainPage = ({ children }) => {
  const { user } = useAuth();

  if (user === null) return <p>Carregando...</p>;
  if (user) return <Navigate to="/profile" replace />;

  return children;
};
