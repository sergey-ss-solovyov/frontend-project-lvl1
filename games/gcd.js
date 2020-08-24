import pkg from '@hexlet/pairs';

// CommonJS doesn't support named export
const { cons, car, cdr } = pkg;

export const issue = () => 'Find the greatest common divisor of given numbers.';

export const pairOfNumbers = () => {
  const multipliers = [2, 3, 5, 7, 11];
  // positionNum: random value from [0, 1, 2, 3, 4]
  const positionNum = () => Math.floor(Math.random() * Math.floor(5));
  // randomNumber: value from [2, 3, 4, 5, 6, 7, 8, 9, 10]
  const randomNumber = () => Math.ceil(Math.random() * (10 - 1) + 1);
  const parentNumber = randomNumber();
  const num1 = parentNumber * multipliers[positionNum()];
  const num2 = parentNumber * multipliers[positionNum()];
  // const pair = cons(num1, num2);
  return `${num1} ${num2}`;
};

export const correctAnswer = (data) => {
  // sort: Z -> A
  const numbers = data.split(' ').sort((a, b) => b - a);
  const pair = cons(numbers[0], numbers[1]);
  const gcd = (num1, num2) => {
    // a = bq + r, where 0 <= r < |b|
    let a = num1;
    let b = num2;
    let r = 1;
    do {
      r = a % b;
      if (r !== 0) {
        a = b;
        b = r;
      }
    } while (r > 0);
    return b;
  };
  return String(gcd(car(pair), cdr(pair)));
};
