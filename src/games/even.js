import { greeting, gameplay } from '../index.js';
import randomNumber from '../random-number.js';

export default () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const username = greeting(task);

  const correctAnswer = (data) => {
    if (data % 2 === 0) return 'yes';
    return 'no';
  };

  // for choise of any number of rounds for this specific game
  let roundsTotal = 3;
  do {
    const question = randomNumber(0, 99);
    const answer = correctAnswer(question);
    const numbers = { question, answer };
    const isUserRight = gameplay(numbers, roundsTotal - 1, username);
    if (!isUserRight) return;
    roundsTotal -= 1;
  } while (roundsTotal > 0);
};
