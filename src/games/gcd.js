import pkg from '@hexlet/pairs';
import { greeting, gameplay } from '../index.js';
import randomNumber from '../random-number-calculator.js';
import gcd from '../gcd-calculator.js';

// CommonJS doesn't support named export
const { cons, car, cdr } = pkg;

export default () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const username = greeting(task);

  const pairOfNumbers = () => {
    const multipliers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    const { length } = multipliers;
    const num1 = randomNumber(2, 10) * multipliers[randomNumber(0, length - 1)];
    const num2 = randomNumber(2, 10) * multipliers[randomNumber(0, length - 1)];
    return `${num1} ${num2}`;
  };

  const correctAnswer = (data) => {
    // sort: descending order
    const numbers = data.split(' ').sort((a, b) => b - a);
    const pair = cons(numbers[0], numbers[1]);
    return String(gcd(car(pair), cdr(pair)));
  };

  // for choise of any number of rounds for this specific game
  let roundsTotal = 3;
  do {
    const question = pairOfNumbers();
    const answer = correctAnswer(question);
    const numbers = { question, answer };
    const isUserRight = gameplay(numbers, roundsTotal - 1, username);
    if (!isUserRight) return;
    roundsTotal -= 1;
  } while (roundsTotal > 0);
};
