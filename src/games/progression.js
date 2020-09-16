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

export const makeQuestionAndAnswer = () => {
  const gameProgression = makeGameProgression();
  const { length } = gameProgression;
  const substituteIndex = makeRandomNumber(1, length - 2);
  const answer = String(gameProgression[substituteIndex]);
  gameProgression[substituteIndex] = '..';
  const question = gameProgression.join(' ');
  return { question, answer };
};

export const playGame = () => {
  const task = 'What number is missing in the progression?';
  runGame(task, makeQuestionAndAnswer);
};
