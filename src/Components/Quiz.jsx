import React, { useState, useRef } from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import Options from "./Options";

const Quiz = ({
   setCurrentIndex,
   currentIndex,
   currentQuestion,
   options,
   score,
   setScore,
   questions,
   results,
   setResults,
}) => {
   const [disableNext, setDisableNext] = useState(true);
   const [disableOption, setDisableOption] = useState(false);
   const [selected, setSelected] = useState(false);
   const [correct, setCorrect] = useState(false);
   const optionsArr = useRef();

   const formatStr = (str) => {
      return str
         .replace(/&quot;/g, '"')
         .replace(/&#039;/g, "'")
         .replace(/&amp;/g, "&")
         .replace(/&eacute;/g, "é");
   };

   const clearOptions = () => {
      let arr = Array.from(optionsArr.current.children);
      arr.map((el) => (el.className = "quiz-modal__option"));

      setCurrentIndex((currentIndex += 1));
      setDisableNext(!disableNext);
      setDisableOption(!disableOption);
      setSelected(!selected);

      if (currentIndex === questions.length) {
         setResults(!results);
      }
   };

   const submitAnswer = (e, option) => {
      setSelected(!selected);
      setDisableNext(!disableNext);
      setDisableOption(!disableOption);

      if (currentQuestion.incorrect_answers.indexOf(option) !== -1) {
         let arr = Array.from(optionsArr.current.children);
         let correctAnswer = arr.find(
            (el) => el.value === currentQuestion.correct_answer
         );

         correctAnswer.classList.add("quiz-modal__option--correct");
         e.currentTarget.classList.add("quiz-modal__option--incorrect");
         setCorrect(false);
      } else {
         e.currentTarget.classList.add("quiz-modal__option--correct");
         setScore((score += 1));
         setCorrect(true);
      }
   };

   return (
      <>
         <header className="quiz-modal__header">
            {currentQuestion && formatStr(currentQuestion.question)}
         </header>
         <main className="quiz-modal__body" ref={optionsArr}>
            {currentQuestion && (
               <Options
                  options={options}
                  formatStr={formatStr}
                  submitAnswer={submitAnswer}
                  disableOption={disableOption}
               />
            )}
         </main>
         <footer className="quiz-modal__footer">
            {selected && correct ? (
               <p className="quiz-modal__footer-alert quiz-modal__footer-alert--correct">
                  <AiOutlineCheck className="quiz-modal__icon quiz-modal__icon--check" />Correct!
               </p>
            ) : selected && !correct ? (
               <p className="quiz-modal__footer-alert quiz-modal__footer-alert--incorrect">
                  <AiOutlineClose className="quiz-modal__icon quiz-modal__icon--incorrect" />Sorry, that answer is incorrect.
               </p>
            ) : (
               !selected && null
            )}
            <div className="quiz-modal__footer-controls">
               <p className="quiz-modal__footer-current">{`${currentIndex <= 9 ? currentIndex + 1 : ''} / ${questions.length}`}</p>
               <button
               className={`quiz-modal__btn quiz-modal__btn${
                  disableNext ? "--disabled" : "--enabled"
               }`}
               disabled={disableNext}
               onClick={() => clearOptions()}
            >
               Next
            </button>
            </div>
         </footer>
      </>
   );
};

export default Quiz;
