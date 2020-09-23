import readlineSync from 'readline-sync';

export default (task, fetchQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(task);

  const numberOfRounds = 3;

  const runEngine = (counter) => {
    if (counter === numberOfRounds) {
      console.log(`Congratulations, ${username}!`);
      return;
    }

    const { question, answer } = fetchQuestionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
      runEngine(counter + 1);
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${username}!`);
    }
  };
  runEngine(0);
};
