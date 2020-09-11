import pkg from '@hexlet/pairs';
import gameplay from '../index.js';
import randomNumber from '../calculators/random-number-calculator.js';
import { sum, multiply, difference } from '../calculators/arithmetic-calculator.js';

// CommonJS doesn't support named export
const { cons, car, cdr } = pkg;

const operands = () => {
  const operatorsSet = ['+', '*', '-'];
  return `${randomNumber(0, 99)} ${operatorsSet[randomNumber(0, 2)]} ${randomNumber(0, 99)}`;
};

const correctAnswer = (str) => {
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

export default () => {
  const task = 'What is the result of the expression?';

  const iter = (obj, acc) => {
    if (acc === 3) return obj;
    const question = operands();
    const answer = correctAnswer(question);
    obj.question.push(question);
    obj.answer.push(answer);
    return iter(obj, acc + 1);
  };
  const questionsAndAnswers = iter({ question: [], answer: [] }, 0);

  gameplay(task, questionsAndAnswers);
};
