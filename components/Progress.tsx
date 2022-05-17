import React from "react";
import useAppContext from "../context/useContext";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { actions } from "../state/actions";
import { ProgressProps } from "../types/components";

const Progress = ({ isSelected, setIsSelected }: ProgressProps) => {
   const {
      state: { isCorrect, currentIndex, questions },
      dispatch,
   } = useAppContext();

   const Alert = () => {
      if (!isSelected) return null;
      if (isSelected && isCorrect) {
         return (
            <p className="quiz-modal__progress-alert quiz-modal__progress-alert--correct">
               <AiOutlineCheck className="quiz-modal__icon quiz-modal__icon--check" />
               Correct!
            </p>
         );
      }

      return (
         <p className="quiz-modal__progress-alert quiz-modal__progress-alert--incorrect">
            <AiOutlineClose className="quiz-modal__icon quiz-modal__icon--incorrect" />
            Sorry, that answer is incorrect.
         </p>
      );
   };

   const Controls = () => (
      <div className="quiz-modal__progress-controls">
         <p className="quiz-modal__progress-current">{`${
            currentIndex <= questions.length - 1 ? currentIndex + 1 : ""
         } / ${questions.length}`}</p>
         <button
            className={`quiz-modal__btn quiz-modal__btn${
               !isSelected ? "--disabled" : "--enabled"
            }`}
            disabled={!isSelected}
            onClick={() => {
               dispatch({
                  type: actions.initializeQuestion,
               });
               setIsSelected(!isSelected);
            }}
         >
            Next
         </button>
      </div>
   );

   return (
      <>
         <Alert />
         <Controls />
      </>
   );
};

export default Progress;