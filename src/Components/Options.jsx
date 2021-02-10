import React from "react";
import Option from "./Option";

const Options = ({ options, submitAnswer, formatStr, disableOption }) =>
   options.map((option, index) => (
      <Option
         option={option}
         submitAnswer={submitAnswer}
         formatStr={formatStr}
         key={index}
         disableOption={disableOption}
      />
   ));

export default Options;
