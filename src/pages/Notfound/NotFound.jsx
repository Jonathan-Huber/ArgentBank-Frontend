import { Link } from "react-router";
import Button from "../../components/Button/Button";
import "./_notfound.scss";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">
        <Button className="btn-block btn-block--720">Go back home</Button>
      </Link>
    </div>
  );
}

export default NotFound;
