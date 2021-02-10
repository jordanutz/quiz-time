import React from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

const Results = ({ score, questions, restartGame }) => (
   <main>
      <div className="quiz-modal__score">
         <div className="quiz-modal__results">
            <p className="quiz-modal__results-score">
               {Math.round((score / questions.length) * 100)}%
            </p>
         </div>
         <div className="quiz-modal__score-details">
            <p className="quiz-modal__score-header">Your Results:</p>
            <p>
               <AiOutlineCheck className="quiz-modal__icon quiz-modal__icon--check" />{" "}
               Correct:
               <span>{score}</span>
            </p>
            <p>
               <AiOutlineClose className="quiz-modal__icon quiz-modal__icon--incorrect" />{" "}
               Incorrect:
               <span>{questions.length - score}</span>
            </p>
         </div>
      </div>
      <div className="quiz-modal__controls">
         <button
            className="quiz-modal__btn quiz-modal__btn--enabled"
            onClick={() => restartGame()}
         >
            Play Again
         </button>
      </div>
   </main>
);

export default Results;
