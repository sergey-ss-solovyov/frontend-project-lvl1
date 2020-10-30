import _ from 'lodash';
import runGame from '../index.js';

const random = () => _.random(2, 10) * _.random(2, 10);
const findGcd = (num1, num2) => (num2 ? findGcd(num2, num1 % num2) : num1);

export const makeQuestionAndAnswer = () => {
  const number1 = random();
  const number2 = random();
  const question = `${number1} ${number2}`;
  const answer = String(findGcd(number1, number2));
  return { question, answer };
};

export const playGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  runGame(task, makeQuestionAndAnswer);
};
