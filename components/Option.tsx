import React from "react";
import useAppContext from "../context/useContext";
import { formatStr } from "../utils/formatStr";
import { actions } from "../state/actions";
import { OptionProps } from "../types/components";

const Option = ({
  isSelected,
  setIsSelected,
  option,
  submitAnswer,
}: OptionProps): JSX.Element => {
  const { dispatch } = useAppContext();

  return (
    <button
      className="quiz-modal__option"
      onClick={(event) => {
        dispatch({
          type: actions.submitAnswer,
          payload: {
            selectedOption: option,
          },
        });
        submitAnswer(event, option);
        setIsSelected((prevState) => !prevState);
      }}
      disabled={isSelected}
      value={option}
    >
      {formatStr(option)}
    </button>
  );
};

export default Option;
