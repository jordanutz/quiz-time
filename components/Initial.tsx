import React from "react";
import Controller from "../assets/controller.png";

const Initial = (): JSX.Element => (
  <section className="quiz-modal__initial">
    <img
      className="quiz-modal__controller"
      src={Controller.src}
      alt=""
      role="presentation"
    />
    <h1 className="quiz-modal__initial-header">
      Quiz Time: Video Game <span>ed.</span>
    </h1>
    <p className="quiz-modal__initial-paragraph">
      Ready to test your knowledge of video games?{" "}
    </p>
  </section>
);

export default Initial;
