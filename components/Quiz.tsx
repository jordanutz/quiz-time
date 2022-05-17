import React, { useRef } from "react";
import useAppContext from "../context/useContext";
import { formatStr } from "../utils/formatStr";

import Options from "./Options";

const Quiz = ({ isSelected, setIsSelected }) => {
   const {
      state: { questions, currentIndex },
   } = useAppContext();
   const optionsContainerRef = useRef<HTMLDivElement>();

   const submitAnswer = (e, option) => {
      const current = questions[currentIndex];

      if (current.incorrect_answers.includes(option)) {
         const arr = Array.from(optionsContainerRef.current.children);
         const correctAnswer = arr.find(
            (el) => el.value === current.correct_answer
         );
         correctAnswer.classList.add("quiz-modal__option--correct");
         e.currentTarget.classList.add("quiz-modal__option--incorrect");
      } else {
         e.currentTarget.classList.add("quiz-modal__option--correct");
      }
   };

   return (
      <>
         <header className="quiz-modal__header">
            {questions.length && formatStr(questions[currentIndex].question)}
         </header>
         <Options
            isSelected={isSelected}
            ref={optionsContainerRef}
            setIsSelected={setIsSelected}
            submitAnswer={submitAnswer}
         />
      </>
   );
};

export default Quiz;