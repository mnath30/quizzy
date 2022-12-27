import { useState } from "react";
import { SET_SEARCH_TEXT } from "../../utils/constants";
import "./search.css";

type SearchProps = {
  dispatch: any;
  text: string;
};

const Search = ({ dispatch, text }: SearchProps): JSX.Element => {
  const [searchText, setSearchText] = useState(text);

  const searchQuiz = (e: any) => {
    setSearchText(() => e.target.value);
    dispatch({ type: SET_SEARCH_TEXT, payload: e.target.value });
  };

  return (
    <div className="searchbar">
      <input
        className="searchbar__input"
        placeholder="Search quizzes using title"
        value={searchText}
        onInput={(e) => searchQuiz(e)}
      />
    </div>
  );
};

export { Search };
