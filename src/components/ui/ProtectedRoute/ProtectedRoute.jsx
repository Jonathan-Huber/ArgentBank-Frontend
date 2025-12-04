import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import "./ProtectedRoute.scss";

function ProtectedRoute({ children }) {
  const { isLoggedIn, statusProfile } = useSelector((state) => state.user);

  if (statusProfile === "loading") {
    return (
      <div className="centered-loader">
        <Loading />
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
}

export default ProtectedRoute;
