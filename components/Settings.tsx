import React from "react";
import useAppContext from "../context/useContext";
import { actions } from "../state/actions";

const Settings = () => {
   const {
      dispatch,
      fetchQuestions,
      state
   } = useAppContext();
   const { startGame } = actions;
   
   const isStartDisabled = !state.questions.length;

   return (
      <form
         className="settings"
         onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: startGame });
         }}
      >
         <section className="settings__form-item">
            <label htmlFor="difficulty">Choose your difficulty: </label>
            <select
               id="difficulty"
               name="difficulty"
               placeholder="Please select"
               onChange={(e) => fetchQuestions(e.target.value)}
               required
               defaultValue=""
            >
               <option value="" disabled hidden></option>
               <option value="easy">Easy</option>
               <option value="medium">Medium</option>
               <option value="hard">Hard</option>
            </select>
         </section>
         <input
            className="quiz-modal__btn"
            disabled={isStartDisabled}
            type="submit"
            value={`${state.restart ? "Play Again" : "Let's do it!"}`}
         />
      </form>
   );
};

export default Settings;