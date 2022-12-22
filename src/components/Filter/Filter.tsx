import { Chip } from "./Chip";
import "./filter.css";

const filterData = ["All", "Web Series", "Movies", "Web Development", "Books"];

const Filter = ({ filterFunc }: any): JSX.Element => {
  return (
    <div className="filter flex-row">
      {filterData.map((data) => (
        <Chip key={data} filterValue={data} applyFilter={filterFunc} />
      ))}
    </div>
  );
};

export { Filter };
