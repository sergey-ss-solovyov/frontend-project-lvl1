import pkg from '@hexlet/pairs';

// CommonJS doesn't support named export
const { cons, car, cdr } = pkg;

export const issue = () => 'What is the result of the expression?';
export const questionExpression = () => {
  const calcRandNum1 = () => Math.floor(Math.random() * 100);
  const calcRandNum2 = () => Math.floor(Math.random() * 100);
  const operatorsSet = ['+', '*', '-'];
  // positionNum: random value from [0, 1, 2]
  const positionNum = () => Math.floor(Math.random() * 3);
  return `${calcRandNum1()} ${operatorsSet[positionNum()]} ${calcRandNum2()}`;
};
const sum = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;
const difference = (num1, num2) => num1 - num2;

export const correctAnswer = (str) => {
  const expParts = str.split(' ');
  const pair = cons(+expParts[0], +expParts[2]);
  switch (expParts[1]) {
    case '+':
      return String(sum(car(pair), cdr(pair)));
    case '*':
      return String(multiply(car(pair), cdr(pair)));
    default:
      return String(difference(car(pair), cdr(pair)));
  }
};
