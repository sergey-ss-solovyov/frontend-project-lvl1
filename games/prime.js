import { greeting, gameplay } from '../src/index.js';

export default () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const username = greeting(task);

  // randomNumber: value from 2 to 113 with a step of 1
  // gameplay optimization: the very big concentration of Primes is in the range from 2 to 113
  const randomNumber = () => Math.ceil(Math.random() * (113 - 1) + 1);

  const correctAnswer = (data) => {
    const iter = (acc) => {
      if (acc > data / 2) {
        return 'yes';
      }
      if (data % acc === 0) {
        return 'no';
      }
      return iter(acc + 1);
    };
    return iter(2);
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
