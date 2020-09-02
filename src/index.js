import readlineSync from 'readline-sync';

export const greeting = (task) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(task);
  return username;
};

export const gameplay = (numbers, restOfRounds, username) => {
  const { question, answer } = numbers;
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const isUserRight = userAnswer === answer;
  if (!isUserRight) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
    console.log(`Let's try again, ${username}!`);
  } else {
    console.log('Correct!');
    if (restOfRounds === 0) console.log(`Congratulations, ${username}!`);
  }
  return isUserRight;
};
