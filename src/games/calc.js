import startGameEngine from '../index.js';
import makeRandomNumber from '../calculators/random-number-calculator.js';

const sum = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;
const difference = (num1, num2) => num1 - num2;
const operatorsSet = ['+', '*', '-'];

const makeResult = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return String(sum(num1, num2));
    case '*':
      return String(multiply(num1, num2));
    default:
      return String(difference(num1, num2));
  }
};

const makeExpression = () => {
  const num1 = makeRandomNumber(0, 99);
  const num2 = makeRandomNumber(0, 99);
  const operator = operatorsSet[makeRandomNumber(0, 2)];
  const result = makeResult(num1, num2, operator);
  return [num1, num2, operator, result];
};

export const makeCalcQuestionsAnswers = (counter) => {
  const iter = (acc) => {
    if (acc.length === counter) return acc;
    const [num1, num2, operator, result] = makeExpression();
    const question = `${num1} ${operator} ${num2}`;
    const answer = result;
    return iter([...acc, [question, answer]]);
  };
  return iter([]);
};

export const playGame = () => {
  const task = 'What is the result of the expression?';
  startGameEngine(task, makeCalcQuestionsAnswers);
};
