import pkg from '@hexlet/pairs';
import gameplay from '../index.js';
import randomNumber from '../calculators/random-number-calculator.js';
import sequence from '../calculators/sequence-calculator.js';
import gcd from '../calculators/gcd-calculator.js';

// CommonJS doesn't support named export
const { cons, car, cdr } = pkg;

const pairOfNumbers = () => {
  const multipliers = sequence(2, 9);
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

export default () => {
  const task = 'Find the greatest common divisor of given numbers.';

  const iter = (obj, acc) => {
    if (acc === 3) return obj;
    const question = pairOfNumbers();
    const answer = correctAnswer(question);
    obj.question.push(question);
    obj.answer.push(answer);
    return iter(obj, acc + 1);
  };
  const questionsAndAnswers = iter({ question: [], answer: [] }, 0);

  gameplay(task, questionsAndAnswers);
};
