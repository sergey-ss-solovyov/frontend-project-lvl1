import runGame from '../index.js';
import makeRandomNumber from '../random-number-generator.js';

const makeSequence = (start, length, step) => {
  const sequence = [];
  for (let i = 0; i < length; i += 1) {
    sequence[i] = start + step * i;
  }
  return sequence;
};

const makeGameProgression = () => {
  const firstValue = makeRandomNumber(1, 10);
  const progressionLength = 10;
  const stepValue = makeRandomNumber(1, 10);
  const gameProgression = makeSequence(firstValue, progressionLength, stepValue);
  return gameProgression;
};

export const makeQuestionsAnswers = (counter) => {
  const iter = (acc) => {
    if (acc.length === counter) return acc;
    const gameProgression = makeGameProgression();
    const { length } = gameProgression;
    const substituteIndex = makeRandomNumber(1, length - 2);
    const substituteValue = String(gameProgression[substituteIndex]);
    gameProgression[substituteIndex] = '..';
    const question = gameProgression.join(' ');
    return iter([...acc, [question, substituteValue]]);
  };
  return iter([]);
};

export const playGame = () => {
  const task = 'What number is missing in the progression?';
  runGame(task, makeQuestionsAnswers);
};
