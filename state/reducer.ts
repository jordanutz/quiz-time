import { actions } from "./actions";
import { generateOptions } from "../utils/generateOptions";
import { StateProps } from "../types/state";

export const reducer = (state: StateProps, action) => {
   switch (action.type) {
      case actions.setQuestions:
         return {
            ...state,
            questions: action.payload.questions,
            currentIndex: 0,
         };

      case actions.startGame:
         return {
            ...state,
            initialized: !state.initialized,
            options: generateOptions(state.questions, state.currentIndex),
            restart: false,
            score: 0,
         };
      case actions.setError:
         return {
            ...state,
            error: action.payload.error,
         };
      case actions.submitAnswer:
         const { questions, currentIndex } = state;
         const {
            payload: { selectedOption },
         } = action;
         const currentQuestion = questions[currentIndex];

         if (!currentQuestion.incorrect_answers.includes(selectedOption)) {
            const updatedScore = state.score + 1;

            return {
               ...state,
               score: updatedScore,
               isCorrect: true,
            };
         }

         return {
            ...state,
            isCorrect: false,
         };
      case actions.initializeQuestion:
         const updatedIndex = state.currentIndex + 1;

         if (updatedIndex === state.questions.length) {
            return {
               ...state,
               questions: [],
               initialized: !state.initialized,
               isCorrect: false,
               restart: true,
            };
         }

         return {
            ...state,
            currentIndex: updatedIndex,
            isCorrect: false,
            options: generateOptions(state.questions, updatedIndex),
         };
      default:
         throw new Error(`Invalid disptatch type '${action.type}'`);
   }
};