import React from "react";

const Option = ({ option, submitAnswer, disableOption, formatStr }) => (
   <button
      className={`quiz-modal__option`}
      onClick={(e) => submitAnswer(e, option)}
      disabled={disableOption}
      value={option}
   >
      {formatStr(option)}
   </button>
);

export default Option;
