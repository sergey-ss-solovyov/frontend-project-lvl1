import { greeting, gameplay } from '../index.js';
import randomNumber from '../random-number.js';

export default () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const username = greeting(task);

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
    // gameplay optimization: the very big concentration of Primes is in the range from 2 to 113
    const question = randomNumber(2, 113);
    const answer = correctAnswer(question);
    const numbers = { question, answer };
    const isUserRight = gameplay(numbers, roundsTotal - 1, username);
    if (!isUserRight) return;
    roundsTotal -= 1;
  } while (roundsTotal > 0);
};
