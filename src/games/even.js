import runGame from '../index.js';
import makeRandomNumber from '../random-number-generator.js';

const isNumberEven = (number) => number % 2 === 0;

export const makeQuestionAndAnswer = () => {
  const question = makeRandomNumber(0, 99);
  const answer = isNumberEven(question) ? 'yes' : 'no';
  return { question, answer };
};

export const playGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(task, makeQuestionAndAnswer);
};
