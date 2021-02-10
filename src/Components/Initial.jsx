import React from "react";

const Initial = ({ setInitialized, initialized }) => (
   <div className="quiz-modal__initial">
      <h1 className="quiz-modal__initial-header">Quiz Time: Video Game Edition</h1>
      <p className="quiz-modal__initial-paragraph">Ready to test your knowledge of video games? </p>
      <button
         className="quiz-modal__btn quiz-modal__btn--enabled"
         onClick={() => setInitialized(!initialized)}
      >
         Let's do it!
      </button>
   </div>
);

export default Initial;
