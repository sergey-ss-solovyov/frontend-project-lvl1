import gameplay from '../index.js';
import randomNumber from '../calculators/random-number-calculator.js';

const correctAnswer = (data) => {
  if (data % 2 === 0) return 'yes';
  return 'no';
};

export default () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  const iter = (obj, acc) => {
    if (acc === 3) return obj;
    const question = randomNumber(0, 99);
    const answer = correctAnswer(question);
    obj.question.push(question);
    obj.answer.push(answer);
    return iter(obj, acc + 1);
  };
  const questionsAndAnswers = iter({ question: [], answer: [] }, 0);

  gameplay(task, questionsAndAnswers);
};
