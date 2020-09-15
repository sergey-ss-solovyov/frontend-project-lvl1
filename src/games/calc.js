import runGame from '../index.js';
import makeRandomNumber from '../random-number-generator.js';

const operators = ['+', '-', '*'];
const { length } = operators;

const makeResult = (num1, num2, operator) => {
  if (operator === '*') return String(num1 * num2);
  return operator === '+' ? String(num1 + num2) : String(num1 - num2);
};

const makeExpressionAndAnswer = () => {
  const num1 = makeRandomNumber(0, 99);
  const num2 = makeRandomNumber(0, 99);
  const operator = operators[makeRandomNumber(0, length - 1)];
  const result = makeResult(num1, num2, operator);
  return [num1, num2, operator, result];
};

export const makeQuestionsAnswers = (counter) => {
  const iter = (acc) => {
    if (acc.length === counter) return acc;
    const [num1, num2, operator, answer] = makeExpressionAndAnswer();
    const question = `${num1} ${operator} ${num2}`;
    return iter([...acc, [question, answer]]);
  };
  return iter([]);
};

export const playGame = () => {
  const task = 'What is the result of the expression?';
  runGame(task, makeQuestionsAnswers);
};
