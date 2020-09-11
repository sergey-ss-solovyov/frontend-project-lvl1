import readlineSync from 'readline-sync';

export default (task, calculator) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(task);

  const numberOfRounds = 3;

  const startGameEngine = (calculatorFunc, counter) => {
    if (counter === numberOfRounds) {
      console.log(`Congratulations, ${username}!`);
      return;
    }

    const questionsAndAnswers = calculatorFunc(numberOfRounds);
    console.log(`Question: ${questionsAndAnswers[counter][0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isUserRight = userAnswer === questionsAndAnswers[counter][1];

    if (isUserRight) {
      console.log('Correct!');
      startGameEngine(calculatorFunc, counter + 1);
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${questionsAndAnswers[counter][1]}".`);
      console.log(`Let's try again, ${username}!`);
    }
  };
  startGameEngine(calculator, 0);
};
