import runGame from '../index.js';
import makeRandomNumber from '../random-number-generator.js';

const isEven = (num) => num % 2 === 0;

export const makeQuestionsAnswers = (counter) => {
  const iter = (acc) => {
    if (acc.length === counter) return acc;
    const question = makeRandomNumber(0, 99);
    const answer = isEven(question) ? 'yes' : 'no';
    return iter([...acc, [question, answer]]);
  };
  return iter([]);
};

export const playGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(task, makeQuestionsAnswers);
};
