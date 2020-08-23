#!/usr/bin/env node

import iter from '../src/questions-cycle.js';
import greeting from '../src/user-greeting.js';

const questionExpression = () => {
  const calcRandNum1 = () => Math.floor(Math.random() * 100);
  const calcRandNum2 = () => Math.floor(Math.random() * 100);
  const operatorsSet = ['+', '*', '-'];
  // Math.floor(3) --> positionNumber: [0, 1, 2]
  const positionNum = Math.floor(Math.random() * Math.floor(3));
  return `${calcRandNum1()} ${operatorsSet[positionNum]} ${calcRandNum2()}`;
};

const sum = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;
const difference = (num1, num2) => num1 - num2;

const correctAnswer = (str) => {
  const expParts = str.split(' ');
  switch (expParts[1]) {
    case '+':
      return String(sum(+expParts[0], +expParts[2]));
    case '*':
      return String(multiply(+expParts[0], +expParts[2]));
    default:
      return String(difference(+expParts[0], +expParts[2]));
  }
};

console.log('Welcome to the Brain Games!');
const username = greeting();
console.log(`Hello, ${username}!`);
console.log('What is the result of the expression?');

iter(questionExpression, correctAnswer, username, 0);
