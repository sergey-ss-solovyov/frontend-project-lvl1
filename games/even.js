import { greeting, gameplay } from '../src/index.js';

export default () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const username = greeting(task);

  // randomNumber: value in range from 0 to 99 with a step of 1
  const randomNumber = () => Math.floor(Math.random() * 100);
  const correctAnswer = (data) => {
    if (data % 2 === 0) return 'yes';
    return 'no';
  };

  // for choise of any number of rounds for this specific game
  let roundsTotal = 3;
  do {
    const question = randomNumber();
    const answer = correctAnswer(question);
    const numbers = { question, answer };
    const isUserRight = gameplay(numbers, roundsTotal - 1, username);
    if (!isUserRight) return;
    roundsTotal -= 1;
  } while (roundsTotal > 0);
};
