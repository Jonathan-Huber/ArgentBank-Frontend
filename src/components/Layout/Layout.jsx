import { Outlet, useMatches } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  const matches = useMatches();

  const currentMatch = matches[matches.length - 1];
  const isSpecial = currentMatch?.handle?.special || false;

  const mainClass = isSpecial ? "bg-dark" : "";

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
