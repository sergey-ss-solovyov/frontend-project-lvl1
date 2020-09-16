import runGame from '../index.js';
import makeRandomNumber from '../random-number-generator.js';

const operators = ['+', '-', '*'];
const { length } = operators;

const makeExpressionElements = () => {
  const number1 = makeRandomNumber(0, 99);
  const number2 = makeRandomNumber(0, 99);
  const operator = operators[makeRandomNumber(0, length - 1)];
  return [number1, number2, operator];
};

const makeAnswer = (number1, number2, operator) => {
  if (operator === '*') return String(number1 * number2);
  return operator === '+' ? String(number1 + number2) : String(number1 - number2);
};

export const makeQuestionAndAnswer = () => {
  const [number1, number2, operator] = makeExpressionElements();
  const question = `${number1} ${operator} ${number2}`;
  const answer = makeAnswer(number1, number2, operator);
  return { question, answer };
};

export const playGame = () => {
  const task = 'What is the result of the expression?';
  runGame(task, makeQuestionAndAnswer);
};
