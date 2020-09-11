import pairPackage from '@hexlet/pairs';
import startGameEngine from '../index.js';
import makeRandomNumber from '../calculators/random-number-calculator.js';

// CommonJS doesn't support named export
const { cons, car, cdr } = pairPackage;

const findGCD = (num1, num2) => {
  // a = bq + r, where 0 <= r < | b |
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

const makeSequence = (start, length, step = 1) => {
  const seq = [];
  seq[0] = start;
  for (let i = 1; i < length; i += 1) {
    seq[i] = seq[i - 1] + step;
  }
  return seq;
};

const makePairOfNumbers = () => {
  const multipliers = makeSequence(2, 9);
  const { length } = multipliers;
  const num1 = makeRandomNumber(2, 10) * multipliers[makeRandomNumber(0, length - 1)];
  const num2 = makeRandomNumber(2, 10) * multipliers[makeRandomNumber(0, length - 1)];
  return `${num1} ${num2}`;
};

const makeCorrectAnswer = (data) => {
  // sort: descending order
  const numbers = data.split(' ').sort((a, b) => b - a);
  const pair = cons(numbers[0], numbers[1]);
  return String(findGCD(car(pair), cdr(pair)));
};

export const makeGcdQuestionsAnswers = (counter) => {
  const iter = (acc) => {
    if (acc.length === counter) return acc;
    const question = makePairOfNumbers();
    const answer = makeCorrectAnswer(question);
    return iter([...acc, [question, answer]]);
  };
  return iter([]);
};

export const playGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  startGameEngine(task, makeGcdQuestionsAnswers);
};
