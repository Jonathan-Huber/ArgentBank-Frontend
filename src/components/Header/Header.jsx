import { Link, useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import logo1x from "../../assets/images/argentBankLogo.png";
import logo2x from "../../assets/images/argentBankLogo@2x.png";
import "./_header.scss";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header>
      <nav className="navbar">
        {isHome ? (
          <img
            className="navbar__logo-img"
            src={logo1x}
            srcSet={`${logo1x} 1x, ${logo2x} 2x`}
            width={200}
            height={54}
            alt="Argent Bank Logo"
          />
        ) : (
          <Link to="/" className="navbar__logo">
            <img
              className="navbar__logo-img"
              src={logo1x}
              srcSet={`${logo1x} 1x, ${logo2x} 2x`}
              width={200}
              height={54}
              alt="Argent Bank Logo"
            />
          </Link>
        )}

        <div className="navbar__items">
          <Link to="/profile" className="navbar__item">
            <FontAwesomeIcon icon={faCircleUser} />
            Tony
          </Link>
          <Link to="/" className="navbar__item">
            <FontAwesomeIcon icon={faRightFromBracket} />
            Sign Out
          </Link>
          <Link to="/sign-in" className="navbar__item">
            <FontAwesomeIcon icon={faRightToBracket} />
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
