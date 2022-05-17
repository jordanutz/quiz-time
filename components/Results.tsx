import React, { useMemo } from "react";
import useAppContext from "../context/useContext";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import Controller from "../assets/controller.png";

const Results = () => {
  const {
    state: { score, currentIndex },
  } = useAppContext();

  const memoizedTotal = useMemo(() => currentIndex + 1, []);
  const finalScore = Math.round((score / memoizedTotal) * 100);
  const incorrect = memoizedTotal - score;

  return (
    <>
      <section className="quiz-modal__score">
        <img
          className="quiz-modal__controller"
          src={Controller.src}
          alt=""
          role="presentation"
        />
        <div className="quiz-modal__score-container">
          <div className="quiz-modal__results">
            <p className="quiz-modal__results-score">
              {finalScore}
              <span>%</span>
            </p>
          </div>
          <div className="quiz-modal__score-details">
            <p className="quiz-modal__score-header">Results:</p>
            <p>
              <AiOutlineCheck className="quiz-modal__icon quiz-modal__icon--check" />{" "}
              Correct:
              <span>{score}</span>
            </p>
            <p>
              <AiOutlineClose className="quiz-modal__icon quiz-modal__icon--incorrect" />{" "}
              Incorrect:
              <span>{incorrect}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Results;
