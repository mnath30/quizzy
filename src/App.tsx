import { useEffect } from "react";
import "./App.css";
import { useQuiz } from "./context";
import {
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
} from "./utils/constants";
import { getData } from "./utils/getData";
import { Router } from "./router/Router";

function App(): JSX.Element {
  const { dispatch } = useQuiz();
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: FETCH_DATA });
      try {
        const response = await getData("/api/quiz");
        dispatch({ type: FETCH_DATA_SUCCESS, payload: response?.quiz });
      } catch (error) {
        dispatch({
          type: FETCH_DATA_ERROR,
          payload: error,
        });
      }
    };
    fetchData();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="App dark">
      <Router />
    </div>
  );
}

export default App;
