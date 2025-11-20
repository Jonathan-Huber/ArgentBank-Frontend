import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import UserProfile from "./pages/UserProfile/UserProfile";
import NotFound from "./pages/Notfound/NotFound";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sign-in", element: <SignIn />, handle: { special: true } },
      { path: "/profile", element: <UserProfile />, handle: { special: true } },
      { path: "/404", element: <NotFound />, handle: { special: true } },
      { path: "*", element: <NotFound />, handle: { special: true } },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
