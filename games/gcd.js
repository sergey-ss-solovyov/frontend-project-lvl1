import pkg from '@hexlet/pairs';
import { greeting, gameplay } from '../src/index.js';

// CommonJS doesn't support named export
const { cons, car, cdr } = pkg;

export default () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const username = greeting(task);

  const pairOfNumbers = () => {
    const multipliers = [2, 3, 5, 7, 11];
    // positionNum: random value from 0 to 4 with a step of 1
    const positionNum = () => Math.floor(Math.random() * 5);
    // randomNumber: value from 2 to 10 with a step of 1
    const randomNumber = () => Math.ceil(Math.random() * (10 - 1) + 1);
    const parentNumber = randomNumber();
    const num1 = parentNumber * multipliers[positionNum()];
    const num2 = parentNumber * multipliers[positionNum()];
    return `${num1} ${num2}`;
  };

  const correctAnswer = (data) => {
    // sort: descending order
    const numbers = data.split(' ').sort((a, b) => b - a);
    const pair = cons(numbers[0], numbers[1]);
    const gcd = (num1, num2) => {
      // a = bq + r, where 0 <= r < |b|
      let a = num1;
      let b = num2;
      let r = 1;
      do {
        r = a % b;
        if (r !== 0) {
          a = b;
          b = r;
        }
      } while (r > 0);
      return b;
    };
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
