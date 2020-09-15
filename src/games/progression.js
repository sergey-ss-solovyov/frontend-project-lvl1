import startGameEngine from '../index.js';
import makeRandomNumber from '../random-number-generator.js';

const progressionLength = 10;

const makeSequence = (start, length, step = 1) => {
  const seq = [];
  seq[0] = start;
  for (let i = 1; i < length; i += 1) {
    seq[i] = seq[i - 1] + step;
  }
  return seq;
};

const makeProgrssnAndAnswer = (progression) => {
  const gameProgression = progression;
  const substituteIndex = makeRandomNumber(1, progressionLength - 2);
  const substituteValue = String(gameProgression[substituteIndex]);
  gameProgression[substituteIndex] = '..';
  return [gameProgression.join(' '), substituteValue];
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
