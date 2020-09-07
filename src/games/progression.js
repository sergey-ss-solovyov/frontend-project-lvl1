import gameplay from '../index.js';
import randomNumber from '../calculators/random-number-calculator.js';
import sequence from '../calculators/sequence-calculator.js';

export default () => {
  const task = 'What number is missing in the progression?';

  const arithmProgression = () => {
    const progression = sequence(randomNumber(1, 10), 10, randomNumber(1, 10));
    const { length } = progression;
    progression[randomNumber(1, length - 2)] = '..';
    return progression.join(' ');
  };

  const correctAnswer = (data) => {
    const progression = data.split(' ');
    const substIndex = progression.indexOf('..');
    return String((+progression[substIndex - 1] + +progression[substIndex + 1]) / 2);
  };

  const iter = (obj, acc) => {
    if (acc === 3) return obj;
    const question = arithmProgression();
    const answer = correctAnswer(question);
    obj.question.push(question);
    obj.answer.push(answer);
    return iter(obj, acc + 1);
  };
  const questionsAndAnswers = iter({ question: [], answer: [] }, 0);

  gameplay(task, questionsAndAnswers);
};
