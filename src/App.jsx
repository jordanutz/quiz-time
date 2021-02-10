import React, { useEffect, useState, useRef } from "react";
import Quiz from "./Components/Quiz";
import Results from "./Components/Results";
import Initial from "./Components/Initial";
import axios from "axios";

const App = () => {
   const [questions, setQuestions] = useState([]);
   const [currentQuestion, setCurrentQuestion] = useState(null);
   const [options, setOptions] = useState([]);
   const [results, setResults] = useState(false);
   const [initialized, setInitialized] = useState(false);
   let [currentIndex, setCurrentIndex] = useState(0);
   let [score, setScore] = useState(0);

   useEffect(() => {
      fetchQuestions();
   }, []);

   useEffect(() => {
      setCurrentQuestion(
         questions.find((question, index) => index === currentIndex)
      );

      if (currentQuestion) {
         let options = [
            ...currentQuestion.incorrect_answers,
            currentQuestion.correct_answer,
         ];
         options = options.sort(() => Math.random() - 0.5);
         setOptions(options);
      }
   }, [
      currentQuestion,
      setCurrentQuestion,
      currentIndex,
      setCurrentIndex,
      questions,
      setQuestions,
      results,
      setResults,
   ]);

   const restartGame = () => {
      fetchQuestions();
      setResults(false);
   }

   const fetchQuestions = () => {
      axios
         .get(
            "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple"
         )
         .then((res) => {
            setCurrentIndex(0);
            setScore(0);
            setQuestions(res.data.results);
         })
         .catch((err) => console.log(err));
   };

   return (
      <div className="quiz-modal">
         {!results && initialized ? (
            <Quiz
               options={options}
               setCurrentIndex={setCurrentIndex}
               currentIndex={currentIndex}
               currentQuestion={currentQuestion}
               results={results}
               setResults={setResults}
               score={score}
               setScore={setScore}
               questions={questions}
            />
         ) : results && initialized ? (
            <Results 
               score={score} 
               questions={questions} 
               restartGame={restartGame} 
            />
         ) : (
            !results &&
            !initialized && (
               <Initial
                  setInitialized={setInitialized}
                  initialized={initialized}
               />
            )
         )}
      </div>
   );
};

export default App;
