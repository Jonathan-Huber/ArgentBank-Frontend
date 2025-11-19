import { Outlet, useLocation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  const { pathname } = useLocation();

  const specialPages = ["/sign-in", "/profile"];
  const mainClass = specialPages.includes(pathname) ? "bg-dark" : "";

  return (
    <>
      <Header />
      <main className={mainClass}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
