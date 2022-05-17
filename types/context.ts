import { Dispatch } from "react";
import { StateProps } from "./state";

export type QuizProviderProps = { children: React.ReactNode };

export type AppContextProps = {
    state: StateProps;
    dispatch: Dispatch<any>
    fetchQuestions: (val: string) => void;
}