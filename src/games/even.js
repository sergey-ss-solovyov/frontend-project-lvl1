import playGame from '../index.js';
import makeRandomNumber from '../calculators/random-number-calculator.js';

const makeCorrectAnswer = (data) => {
  if (data % 2 === 0) return 'yes';
  return 'no';
};

export default () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  const iter = (obj, acc) => {
    if (acc === 3) return obj;
    const question = makeRandomNumber(0, 99);
    const answer = makeCorrectAnswer(question);
    obj.question.push(question);
    obj.answer.push(answer);
    return iter(obj, acc + 1);
  };
  const questionsAndAnswers = iter({ question: [], answer: [] }, 0);

  playGame(task, questionsAndAnswers);
};
