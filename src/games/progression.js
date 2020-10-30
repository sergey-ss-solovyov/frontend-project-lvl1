import _ from 'lodash';
import runGame from '../index.js';

const makeSequence = (start, length, step) => {
  const sequence = [];
  for (let i = 0; i < length; i += 1) {
    sequence[i] = start + step * i;
  }
  return sequence;
};

export const makeQuestionAndAnswer = () => {
  const firstValue = _.random(1, 10);
  const length = 10;
  const stepValue = _.random(1, 10);
  const gameProgression = makeSequence(firstValue, length, stepValue);
  const substituteIndex = _.random(1, length - 2);
  const answer = String(gameProgression[substituteIndex]);
  gameProgression[substituteIndex] = '..';
  const question = gameProgression.join(' ');
  return { question, answer };
};

export const playGame = () => {
  const task = 'What number is missing in the progression?';
  runGame(task, makeQuestionAndAnswer);
};
