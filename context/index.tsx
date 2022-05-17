import React, { createContext, useReducer } from "react";
import axios from "axios";

import { initialState } from "../state/initialState";
import { reducer } from "../state/reducer";
import { actions } from "../state/actions";
import { AppContextProps } from "../types/context";
import { QuizProviderProps } from "../types/context";

// Initalize App State
const QuizContext = createContext<AppContextProps | null>(null);

const QuizProvider = ({ children }: QuizProviderProps ) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchQuestions = (difficulty: string) => {
    const url = `https://opentdb.com/api.php?amount=10&category=15&difficulty=${difficulty}&type=multiple`;
    axios
      .get(url)
      .then(({ data }) => {
        dispatch({
          type: actions.setQuestions,
          payload: {
            questions: data.results,
          },
        });
      })
      .catch((err) =>
        dispatch({
          type: actions.setError,
          payload: {
            error: err.statusText,
          },
        })
      );
  };

  return (
    <QuizContext.Provider value={{ state, dispatch, fetchQuestions }}>
      {children}
    </QuizContext.Provider>
  );
};

export { QuizContext, QuizProvider };
