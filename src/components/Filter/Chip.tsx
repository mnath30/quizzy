import { useQuiz } from "../../context";
import "./filter.css";

const Chip = ({ filterValue, applyFilter }: any): JSX.Element => {
  const {
    state: { filter },
  } = useQuiz();

  return (
    <div
      className={`filter__chip ${filter === filterValue ? "active" : ""}`}
      onClick={() => applyFilter(filterValue)}
    >
      {filterValue}
    </div>
  );
};

export { Chip };
