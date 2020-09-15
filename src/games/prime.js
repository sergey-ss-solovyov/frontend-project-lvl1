import runGame from '../index.js';
import makeRandomNumber from '../random-number-generator.js';

const isPrime = (data) => {
  const iter = (n) => {
    if (n > data / 2) {
      return true;
    }
    if (data % n === 0) {
      return false;
    }
    return iter(n + 1);
  };
  return iter(2);
};

export const makeQuestionsAnswers = (counter) => {
  const iter = (acc) => {
    if (acc.length === counter) return acc;
    const question = makeRandomNumber(2, 113);
    const answer = isPrime(question) ? 'yes' : 'no';
    return iter([...acc, [question, answer]]);
  };
  return iter([]);
};

export const playGame = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(task, makeQuestionsAnswers);
};
