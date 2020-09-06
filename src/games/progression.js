import { greeting, gameplay } from '../index.js';
import randomNumber from '../random-number.js';

export default () => {
  const task = 'What number is missing in the progression?';
  const username = greeting(task);

  const arithmProgression = () => {
    const progression = new Array(10);
    progression[0] = randomNumber(1, 10);
    const step = randomNumber(1, 10);
    for (let i = 1; i < progression.length; i += 1) {
      progression[i] = progression[i - 1] + step;
    }
    const { length } = progression;
    progression[randomNumber(1, length - 2)] = '..';
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
