import pkg from '@hexlet/pairs';
import { greeting, gameplay } from '../index.js';
import randomNumber from '../random-number.js';

// CommonJS doesn't support named export
const { cons, car, cdr } = pkg;

export default () => {
  const task = 'What is the result of the expression?';
  const username = greeting(task);

  const operands = () => {
    const operatorsSet = ['+', '*', '-'];
    return `${randomNumber(0, 99)} ${operatorsSet[randomNumber(0, 2)]} ${randomNumber(0, 99)}`;
  };

  const sum = (num1, num2) => num1 + num2;
  const multiply = (num1, num2) => num1 * num2;
  const difference = (num1, num2) => num1 - num2;

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

  // for choise of any number of rounds for this specific game
  let roundsTotal = 3;
  do {
    const question = operands();
    const answer = correctAnswer(question);
    const numbers = { question, answer };
    const isUserRight = gameplay(numbers, roundsTotal - 1, username);
    if (!isUserRight) return;
    roundsTotal -= 1;
  } while (roundsTotal > 0);
};
