import runGame from '../index.js';
import makeRandomNumber from '../random-number-generator.js';

const findGcd = (number1, number2) => {
  // a = bq + r, where 0 <= r < | b |
  let a = number1;
  let b = number2;
  let r;
  do {
    r = a % b;
    if (r !== 0) {
      a = b;
      b = r;
    }
  } while (r > 0);
  return b;
};

const makeNumbers = () => {
  const number1 = makeRandomNumber(2, 10) * makeRandomNumber(2, 10);
  const number2 = makeRandomNumber(2, 10) * makeRandomNumber(2, 10);
  return [number1, number2];
};

export const makeQuestionAndAnswer = () => {
  const [number1, number2] = makeNumbers();
  const question = `${number1} ${number2}`;
  const answer = String(findGcd(number1, number2));
  return { question, answer };
};

export const playGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  runGame(task, makeQuestionAndAnswer);
};
