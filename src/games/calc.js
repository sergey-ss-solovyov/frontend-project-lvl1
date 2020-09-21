import runGame from '../index.js';
import makeRandomNumber from '../random-number-generator.js';

const operators = ['+', '-', '*'];
const { length } = operators;

const calculateExpression = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

export const makeQuestionAndAnswer = () => {
  const number1 = makeRandomNumber(0, 99);
  const number2 = makeRandomNumber(0, 99);
  const operator = operators[makeRandomNumber(0, length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculateExpression(number1, number2, operator));
  return { question, answer };
};

export const playGame = () => {
  const task = 'What is the result of the expression?';
  runGame(task, makeQuestionAndAnswer);
};
