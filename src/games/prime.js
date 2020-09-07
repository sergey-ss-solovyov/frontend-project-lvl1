import gameplay from '../index.js';
import randomNumber from '../calculators/random-number-calculator.js';

export default () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const correctAnswer = (data) => {
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

  const iter = (obj, acc) => {
    if (acc === 3) return obj;
    const question = randomNumber(2, 113);
    const answer = correctAnswer(question);
    obj.question.push(question);
    obj.answer.push(answer);
    return iter(obj, acc + 1);
  };
  const questionsAndAnswers = iter({ question: [], answer: [] }, 0);

  gameplay(task, questionsAndAnswers);
};
