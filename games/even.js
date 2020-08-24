export const issue = () => 'Answer "yes" if the number is even, otherwise answer "no".';
export const randomNumber = () => Math.floor(Math.random() * 100);
export const correctAnswer = (data) => {
  if (data % 2 === 0) return 'yes';
  return 'no';
};
