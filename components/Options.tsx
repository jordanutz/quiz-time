import React, { forwardRef } from "react";
import useAppContext from "../context/useContext";
import Option from "./Option";

const Options = forwardRef<HTMLDivElement>((props, ref) => {
  const {
    state: { options, questions },
  } = useAppContext();

  const displayOptions =
    questions.length &&
    options.map((option) => {
      const optionsProps = { ...props, option }
      return  <Option key={option} {...optionsProps} />
    });

  return (
    <section ref={ref} className="quiz-modal__body">
      {displayOptions}
    </section>
  );
});

Options.displayName = "Options";

export default Options;
