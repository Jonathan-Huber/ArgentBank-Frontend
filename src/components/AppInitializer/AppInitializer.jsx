import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/userSlice";

function AppInitializer({ children }) {
  const dispatch = useDispatch();
  const { statusProfile } = useSelector((state) => state.user);

  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  const isInitialized =
    !token || statusProfile === "succeeded" || statusProfile === "failed";

  useEffect(() => {
    if (token) {
      dispatch(fetchUser(token));
    }
  }, [dispatch, token]);

  if (!isInitialized) {
    return null;
  }

  return children;
}

export default AppInitializer;
