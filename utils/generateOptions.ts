export const generateOptions = (questions, currentIndex) => {
  const options = [
    ...questions[currentIndex].incorrect_answers,
    questions[currentIndex].correct_answer,
  ].sort(() => Math.random() - 0.5);

  return options;
};
