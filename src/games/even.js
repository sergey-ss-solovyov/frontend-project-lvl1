import startGameEngine from '../index.js';
import makeRandomNumber from '../calculators/random-number-calculator.js';

const makeCorrectAnswer = (data) => {
  if (data % 2 === 0) return 'yes';
  return 'no';
};

export const makeEvenQuestionsAnswers = (counter) => {
  const iter = (acc) => {
    if (acc.length === counter) return acc;
    const question = makeRandomNumber(0, 99);
    const answer = makeCorrectAnswer(question);
    return iter([...acc, [question, answer]]);
  };
  return iter([]);
};

export const playGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGameEngine(task, makeEvenQuestionsAnswers);
};
