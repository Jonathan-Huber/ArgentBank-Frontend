import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function ProtectedRoute({ children }) {
  const { isLoggedIn, statusProfile } = useSelector((state) => state.user);

  if (statusProfile === "loading") {
    return null;
  }

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
}

export default ProtectedRoute;
