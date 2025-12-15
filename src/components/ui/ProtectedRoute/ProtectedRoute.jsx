import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { selectIsLoggedIn } from "../../../store/userSlice";

function ProtectedRoute({ children }) {
  const { statusProfile } = useSelector((state) => state.user);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (statusProfile === "loading") {
    return null;
  }

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
}

export default ProtectedRoute;
