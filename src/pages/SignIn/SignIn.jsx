import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "./SignIn.scss";

import Button from "../../components/ui/Button/Button";
import { CheckboxField, Field } from "../../components/ui/Field/Fields";
import Loading from "../../components/ui/Loading/Loading";

import { fetchUser, loginUser, selectIsLoggedIn } from "../../store/userSlice";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { statusLogin, errorLogin } = useSelector((state) => state.user);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password, remember })).then((action) => {
      if (loginUser.fulfilled.match(action)) {
        dispatch(fetchUser(action.payload.body.token));
      }
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile");
    }
  }, [isLoggedIn, navigate]);

  return (
    <section className="sign-in">
      <div className="sign-in__content">
        <FontAwesomeIcon
          icon={faUserCircle}
          className="sign-in__icon"
          size="3x"
        />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <Field
            id="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Field
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CheckboxField
            id="remember-me"
            label="Remember me"
            checked={remember}
            onChange={setRemember}
          />
          <Button
            type="submit"
            className="btn-block"
            disabled={statusLogin === "loading"}
          >
            <span className="btn-content">
              {statusLogin === "loading" && <Loading size="small" />}
              {statusLogin === "loading" ? "Connecting..." : "Sign In"}
            </span>
          </Button>
        </form>
        {statusLogin === "failed" && <p>{errorLogin}</p>}
      </div>
    </section>
  );
}

export default SignIn;
