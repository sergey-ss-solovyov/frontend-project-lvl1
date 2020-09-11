import playGame from '../index.js';
import makeRandomNumber from '../calculators/random-number-calculator.js';
import sequence from '../calculators/sequence-calculator.js';

const makeProgression = () => {
  const progression = sequence(makeRandomNumber(1, 10), 10, makeRandomNumber(1, 10));
  const { length } = progression;
  progression[makeRandomNumber(1, length - 2)] = '..';
  return progression.join(' ');
};

const makeCorrectAnswer = (data) => {
  const progression = data.split(' ');
  const substIndex = progression.indexOf('..');
  return String((+progression[substIndex - 1] + +progression[substIndex + 1]) / 2);
};

export default () => {
  const task = 'What number is missing in the progression?';

  const iter = (obj, acc) => {
    if (acc === 3) return obj;
    const question = makeProgression();
    const answer = makeCorrectAnswer(question);
    obj.question.push(question);
    obj.answer.push(answer);
    return iter(obj, acc + 1);
  };
  const questionsAndAnswers = iter({ question: [], answer: [] }, 0);

  playGame(task, questionsAndAnswers);
};
