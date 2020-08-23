#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const randomNumber = max => Math.floor(Math.random() * max);

console.log('Welcome to the Brain Games!');
const username = greeting();
console.log(`Hello, ${username}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const iter = (acc) => {
  if (acc === 3) {
    console.log(`Congratulations, ${username}!`);
    return;
  }
  const numberForCheck = randomNumber(100);
  const correctAnswer = numberForCheck % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${numberForCheck}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    const newAcc = acc + 1;
    iter(newAcc);
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${username}!`);
  }
};

iter(0);
