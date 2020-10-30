import _ from 'lodash';
import runGame from '../index.js';

const isEvenNumber = (number) => number % 2 === 0;

export const makeQuestionAndAnswer = () => {
  const question = _.random(99);
  const answer = isEvenNumber(question) ? 'yes' : 'no';
  return { question, answer };
};

export const playGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(task, makeQuestionAndAnswer);
};
