import "./navigation.css";

const Navigation = (): JSX.Element => {
  return (
    <nav className="navigation flex-row">
      <img src="./favicon.ico" alt="logo" className="navigation__img" />
      <h2>Quizzy</h2>
    </nav>
  );
};

export { Navigation };
