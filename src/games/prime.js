import _ from 'lodash';
import runGame from '../index.js';

const isNumberPrime = (number) => {
  if (number < 2) return false;
  const iter = (divisor) => {
    if (divisor > number / 2) {
      return true;
    }
    if (number % divisor === 0) {
      return false;
    }
    return iter(divisor + 1);
  };
  return iter(2);
};

export const makeQuestionAndAnswer = () => {
  const question = _.random(2, 113);
  const answer = isNumberPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

export const playGame = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(task, makeQuestionAndAnswer);
};
