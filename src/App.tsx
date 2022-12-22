import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import { useQuiz } from "./context/quizContext";
import {
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
} from "./utils/constants";
import { Router } from "./router/Router";

function App() {
  const { dispatch } = useQuiz();
  useEffect(() => {
    const getData = async () => {
      dispatch({ type: FETCH_DATA });
      try {
        const response = await axios.get("/api/qui");
        console.log(response.data.quiz);
        dispatch({ type: FETCH_DATA_SUCCESS, payload: response?.data?.quiz });
      } catch (error: any) {
        dispatch({
          type: FETCH_DATA_ERROR,
          payload: "There was some error in processing your request",
        });
      }
    };
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App dark">
      <Router />
    </div>
  );
}

export default App;
