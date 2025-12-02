import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";
import { fetchUser, loginUser } from "../../store/userSlice";
import "./_signin.scss";
import { CheckboxField, Field } from "../../components/Field/Fields";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { statusLogin, errorLogin, isLoggedIn } = useSelector(
    (state) => state.user
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email: username, password, remember })).then(
      (action) => {
        if (loginUser.fulfilled.match(action)) {
          dispatch(fetchUser(action.payload.body.token));
        }
      }
    );
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
            id="username"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <Button type="submit" className="btn-block">
            Sign In
          </Button>
        </form>
        {statusLogin === "loading" && <p>Connecting...</p>}
        {statusLogin === "failed" && <p>{errorLogin}</p>}
      </div>
    </section>
  );
}

export default SignIn;
