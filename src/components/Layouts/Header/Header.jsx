import { Link, useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";

import {
  logout,
  selectIsLoggedIn,
  selectUserName,
} from "../../../store/userSlice";

import logo1x from "../../../assets/images/argentBankLogo.png";
import logo2x from "../../../assets/images/argentBankLogo@2x.png";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

  const isHome = location.pathname === "/";

  const handleLogout = () => {
    dispatch(logout());
    navigate("/sign-in");
  };

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
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="navbar__item">
                <FontAwesomeIcon icon={faCircleUser} />
                {userName}
              </Link>
              <button onClick={handleLogout} className="navbar__item">
                <FontAwesomeIcon icon={faRightFromBracket} />
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/sign-in" className="navbar__item">
              <FontAwesomeIcon icon={faRightToBracket} />
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
