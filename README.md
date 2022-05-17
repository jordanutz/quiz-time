![alt text](https://i.ibb.co/tYjJRSd/Screen-Shot-2022-05-12-at-5-33-26-PM.jpg)

# Quiz Time: Video Game Ed.

- Intuitive trivia game that tests players on their knowledge of video games with a set of ten randomized questions retrieved from the Open Trivia API.

## Features

- Request is made to Open Trivia endpoint when level of difficulty is selected. ​
- Questions retrieved are dependent on the level of difficulty selected by the user and are randomized before rendering.
- `useReducer` responsible for handling complex state management involving score keeping and quiz progression.
- Flow of information through component tree powered via `useContext`.
- Player cannot move onto the next question without making a selection, nor can a duplicate selection be made once answer is revealed.
- Visual cues leveraged to alert the player if their selection is correct or incorrect, along with a monitoring system that tracks their progress with each question.
- Results containing both the correct and incorrect answers are generated after last submission.
- Player has the option to reset the results and play again.

## Toolbox

- ReactJS (Context & Hooks)
- Sass
- Axios
- Open Trivia API

## Live Demo

[Codepen](https://codepen.io/jordanutz/pen/mdOPWpE)
