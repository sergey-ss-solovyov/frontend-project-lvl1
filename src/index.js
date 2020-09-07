import readlineSync from 'readline-sync';

export default (task, questionsAnswers) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(task);

  const iter = (questionsAndAnswers, acc) => {
    if (acc === 3) {
      console.log(`Congratulations, ${username}!`);
      return;
    }
    const { question, answer } = questionsAndAnswers;
    console.log(`Question: ${question[acc]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isUserRight = userAnswer === answer[acc];

    if (isUserRight) {
      console.log('Correct!');
      iter(questionsAndAnswers, acc + 1);
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer[acc]}".`);
      console.log(`Let's try again, ${username}!`);
    }
  };
  iter(questionsAnswers, 0);
};
