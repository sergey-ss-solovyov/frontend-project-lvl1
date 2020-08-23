#!/usr/bin/env node

import iter from '../src/questions-cycle.js';
import greeting from '../src/user-greeting.js';

const randomNumber = () => Math.floor(Math.random() * 100);
const correctAnswer = (data) => {
  if (data % 2 === 0) return 'yes';
  return 'no';
};

console.log('Welcome to the Brain Games!');
const username = greeting();
console.log(`Hello, ${username}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

iter(randomNumber, correctAnswer, username, 0);
