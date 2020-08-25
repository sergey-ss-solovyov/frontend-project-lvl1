export const issue = () => 'Answer "yes" if the number is even, otherwise answer "no".';

// randomNumber: value in range from 0 to 99 with a step of 1
export const randomNumber = () => Math.floor(Math.random() * 100);

export const correctAnswer = (data) => {
  if (data % 2 === 0) return 'yes';
  return 'no';
};
