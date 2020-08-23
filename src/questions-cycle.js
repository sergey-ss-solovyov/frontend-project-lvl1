import readlineSync from 'readline-sync';

const iter = (questionFunc, answerFunc, user, acc) => {
  if (acc === 3) {
    console.log(`Congratulations, ${user}!`);
    return;
  }
  const question = questionFunc();
  const correctAnswer = answerFunc(question);
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    const newAcc = acc + 1;
    iter(questionFunc, answerFunc, user, newAcc);
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${user}!`);
  }
};

export default iter;
