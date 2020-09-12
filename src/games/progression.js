import startGameEngine from '../index.js';
import makeSequence from '../calculators/sequence-calculator.js';
import makeRandomNumber from '../calculators/random-number-calculator.js';

const progressionLength = 10;

const makeProgrssnAndAnswer = (progression) => {
  const gameProgression = progression;
  const substituteIndex = makeRandomNumber(1, progressionLength - 2);
  const substituteNumber = String(gameProgression[substituteIndex]);
  gameProgression[substituteIndex] = '..';
  return [gameProgression.join(' '), substituteNumber];
};

export const makeQuestionsAnswers = (counter) => {
  const iter = (acc) => {
    if (acc.length === counter) return acc;
    const firstValue = makeRandomNumber(1, 10);
    const stepValue = makeRandomNumber(1, 10);
    const rawProgression = makeSequence(firstValue, progressionLength, stepValue);
    const [progression, answer] = makeProgrssnAndAnswer(rawProgression);
    return iter([...acc, [progression, answer]]);
  };
  return iter([]);
};

export const playGame = () => {
  const task = 'What number is missing in the progression?';
  startGameEngine(task, makeQuestionsAnswers);
};
