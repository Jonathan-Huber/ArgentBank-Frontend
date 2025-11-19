import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Field from "../../components/Field/Field";
import Button from "../../components/Button/Button";
import "./_signin.scss";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password, remember });
    // logique de connexion
  };

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
          <Field
            id="remember-me"
            label="Remember me"
            type="checkbox"
            value={remember}
            onChange={setRemember}
          />
          <Button type="submit" className="btn-block">
            Sign In
          </Button>
        </form>
      </div>
    </section>
  );
}

export default SignIn;
