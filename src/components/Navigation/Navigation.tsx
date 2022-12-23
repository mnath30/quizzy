import "./navigation.css";
import { logo } from "../../assets";

const Navigation = (): JSX.Element => {
  return (
    <nav className="navigation flex-row">
      <img src={logo} alt="logo" className="navigation__img" />
      <h2>Quizzy</h2>
    </nav>
  );
};

export { Navigation };
