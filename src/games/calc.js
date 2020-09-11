import pkg from '@hexlet/pairs';
import startGameEngine from '../index.js';
import makeRandomNumber from '../calculators/random-number-calculator.js';

// CommonJS doesn't support named export
const { cons, car, cdr } = pkg;

const sum = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;
const difference = (num1, num2) => num1 - num2;

const makeOperands = () => {
  const operatorsSet = ['+', '*', '-'];
  return `${makeRandomNumber(0, 99)} ${operatorsSet[makeRandomNumber(0, 2)]} ${makeRandomNumber(0, 99)}`;
};

const makeCorrectAnswer = (str) => {
  const expParts = str.split(' ');
  const pair = cons(+expParts[0], +expParts[2]);
  switch (expParts[1]) {
    case '+':
      return String(sum(car(pair), cdr(pair)));
    case '*':
      return String(multiply(car(pair), cdr(pair)));
    default:
      return String(difference(car(pair), cdr(pair)));
  }
};

export const makeCalcQuestionsAnswers = (counter) => {
  const iter = (acc) => {
    if (acc.length === counter) return acc;
    const question = makeOperands();
    const answer = makeCorrectAnswer(question);
    return iter([...acc, [question, answer]]);
  };
  return iter([]);
};

export const playGame = () => {
  const task = 'What is the result of the expression?';
  startGameEngine(task, makeCalcQuestionsAnswers);
};
