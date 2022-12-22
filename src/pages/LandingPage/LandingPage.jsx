import "./landing-page.css";
import { Link } from "react-router-dom";
import { landingImg } from "../../assets";

const LandingPage = () => {
  return (
    <div className="landingpage flex-row">
      <div className="landingpage__details padding-sm">
        <h1>Quizzy</h1>
        <p className="landingpage__details--para ">
          Take these quizzes and test yourself on variety of fun and interesting
          topics.
        </p>
        <Link to="/categories" className="btn landingpage__details--link">
          Let's get started
        </Link>
      </div>
      <div className="landingpage__image">
        <img
          src={landingImg}
          alt="quizzy-langing-page"
          className="landingpage__image--img"
        />
      </div>
    </div>
  );
};

export { LandingPage };
