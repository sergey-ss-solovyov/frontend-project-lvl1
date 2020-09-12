import startGameEngine from '../index.js';
import makeRandomNumber from '../calculators/random-number-calculator.js';

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
  const firstValue = 2;
  const length = 9;
  const multipliers = makeSequence(firstValue, length);
  // const { length } = multipliers;
  const num1 = makeRandomNumber(2, 10) * multipliers[makeRandomNumber(0, length - 1)];
  const num2 = makeRandomNumber(2, 10) * multipliers[makeRandomNumber(0, length - 1)];
  const gcd = String(findGCD(num1, num2));
  return [num1, num2, gcd];
};

export const makeQuestionsAnswers = (counter) => {
  const iter = (acc) => {
    if (acc.length === counter) return acc;
    const [num1, num2, answer] = makePairOfNumbers();
    const question = `${num1} ${num2}`;
    return iter([...acc, [question, answer]]);
  };
  return iter([]);
};

export const playGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  startGameEngine(task, makeQuestionsAnswers);
};
