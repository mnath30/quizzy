import "./page-not-found.css";
import { Link } from "react-router-dom";
import { Navigation } from "../../components";
import { pageNotFound } from "../../assets";

const PageNotFound = (): JSX.Element => {
  return (
    <div className="container">
      <Navigation />
      <div className="container__content flex-col">
        <h1>Page Not Found</h1>
        <div className="container__content--img">
          <img className="img" alt="page-not-found" src={pageNotFound} />
        </div>
        <p>
          Oops!Could not find the page you were looking for.{" "}
          <Link to="/categories" className="link" replace={true}>
            Go to Categories
          </Link>
        </p>
      </div>
    </div>
  );
};

export { PageNotFound };
