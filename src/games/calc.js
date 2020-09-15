import startGameEngine from '../index.js';
import makeRandomNumber from '../random-number-generator.js';

const operatorsSet = ['+', '*', '-'];

const makeResult = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return String(num1 + num2);
    case '*':
      return String(num1 * num2);
    default:
      return String(num1 - num2);
  }
};

const makeExpressionAndAnswer = () => {
  const num1 = makeRandomNumber(0, 99);
  const num2 = makeRandomNumber(0, 99);
  const operator = operatorsSet[makeRandomNumber(0, 2)];
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
  startGameEngine(task, makeQuestionsAnswers);
};
