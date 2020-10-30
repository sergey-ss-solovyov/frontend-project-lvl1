import _ from 'lodash';
import runGame from '../index.js';

const operators = ['+', '-', '*'];

const calculateExpression = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return _.add(number1, number2);
    case '-':
      return _.subtract(number1, number2);
    case '*':
      return _.multiply(number1, number2);
    default:
      return null;
  }
};

export const makeQuestionAndAnswer = () => {
  const number1 = _.random(99);
  const number2 = _.random(99);
  const operator = _.sample(operators);
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculateExpression(number1, number2, operator));
  return { question, answer };
};

export const playGame = () => {
  const task = 'What is the result of the expression?';
  runGame(task, makeQuestionAndAnswer);
};
