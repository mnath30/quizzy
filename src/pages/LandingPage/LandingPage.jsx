import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <h1>
      Welcome to Quizzy <Link to="/categories">Let's get started</Link>
    </h1>
  );
};

export { LandingPage };
