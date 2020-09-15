import startGameEngine from '../index.js';
import makeRandomNumber from '../random-number-generator.js';

const findGcd = (num1, num2) => {
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

const makeNumbersAndGcd = () => {
  const num1 = makeRandomNumber(2, 10) * makeRandomNumber(2, 10);
  const num2 = makeRandomNumber(2, 10) * makeRandomNumber(2, 10);
  const gcd = String(findGcd(num1, num2));
  return [num1, num2, gcd];
};

export const makeQuestionsAnswers = (counter) => {
  const iter = (acc) => {
    if (acc.length === counter) return acc;
    const [num1, num2, answer] = makeNumbersAndGcd();
    const question = `${num1} ${num2}`;
    return iter([...acc, [question, answer]]);
  };
  return iter([]);
};

export const playGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  startGameEngine(task, makeQuestionsAnswers);
};
