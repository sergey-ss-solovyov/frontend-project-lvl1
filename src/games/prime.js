import playGame from '../index.js';
import makeRandomNumber from '../calculators/random-number-calculator.js';

const makeCorrectAnswer = (data) => {
  const iter = (acc) => {
    if (acc > data / 2) {
      return 'yes';
    }
    if (data % acc === 0) {
      return 'no';
    }
    return iter(acc + 1);
  };
  return iter(2);
};

export default () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const iter = (obj, acc) => {
    if (acc === 3) return obj;
    const question = makeRandomNumber(2, 113);
    const answer = makeCorrectAnswer(question);
    obj.question.push(question);
    obj.answer.push(answer);
    return iter(obj, acc + 1);
  };
  const questionsAndAnswers = iter({ question: [], answer: [] }, 0);

  playGame(task, questionsAndAnswers);
};
