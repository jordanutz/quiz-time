import { useContext } from "react";
import { QuizContext } from "./";

const useAppContext = () => {
   const context = useContext(QuizContext);

   if (!context) {
      throw new Error("QuizContext needs to be within a QuizContextProvider");
   }

   return context;
};

export default useAppContext;