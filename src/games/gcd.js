import runGame from '../index.js';
import makeRandomNumber from '../random-number-generator.js';

const findGcd = (num1, num2) => (num2 ? findGcd(num2, num1 % num2) : num1);

export const makeQuestionAndAnswer = () => {
  const number1 = makeRandomNumber(2, 10) * makeRandomNumber(2, 10);
  const number2 = makeRandomNumber(2, 10) * makeRandomNumber(2, 10);
  const question = `${number1} ${number2}`;
  const answer = String(findGcd(number1, number2));
  return { question, answer };
};

export const playGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  runGame(task, makeQuestionAndAnswer);
};
