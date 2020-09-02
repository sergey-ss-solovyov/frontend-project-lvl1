import { greeting, gameplay } from '../src/index.js';

export default () => {
  const task = 'What number is missing in the progression?';
  const username = greeting(task);

  const arithmProgression = () => {
    // startNum, progressionStep: random values from 1 to 10 with a step of 1
    // substituteIndex: random value from 1 to 8 with a step of 1
    const startNum = () => Math.ceil(Math.random() * 10);
    const progressionStep = () => Math.ceil(Math.random() * 10);
    const substituteIndex = () => Math.ceil(Math.random() * 8);
    const progression = new Array(10);
    progression[0] = startNum();
    const step = progressionStep();
    for (let i = 1; i < progression.length; i += 1) {
      progression[i] = progression[i - 1] + step;
    }
    progression[substituteIndex()] = '..';
    return progression.join(' ');
  };

  const correctAnswer = (data) => {
    const progression = data.split(' ');
    const substIndex = progression.indexOf('..');
    return String((+progression[substIndex - 1] + +progression[substIndex + 1]) / 2);
  };

  // for choise of any number of rounds for this specific game
  let roundsTotal = 3;
  do {
    const question = arithmProgression();
    const answer = correctAnswer(question);
    const numbers = { question, answer };
    const isUserRight = gameplay(numbers, roundsTotal - 1, username);
    if (!isUserRight) return;
    roundsTotal -= 1;
  } while (roundsTotal > 0);
};
