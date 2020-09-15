import readlineSync from 'readline-sync';

export default (task, fetchQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(task);

  const numberOfRounds = 3;

  const runEngine = (fetchQuestionAnswer, counter) => {
    if (counter === numberOfRounds) {
      console.log(`Congratulations, ${username}!`);
      return;
    }

    const questionsAndAnswers = fetchQuestionAnswer(numberOfRounds);
    console.log(`Question: ${questionsAndAnswers[counter][0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isUserRight = userAnswer === questionsAndAnswers[counter][1];

    if (isUserRight) {
      console.log('Correct!');
      runEngine(fetchQuestionAnswer, counter + 1);
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${questionsAndAnswers[counter][1]}".`);
      console.log(`Let's try again, ${username}!`);
    }
  };
  runEngine(fetchQuestionAndAnswer, 0);
};
