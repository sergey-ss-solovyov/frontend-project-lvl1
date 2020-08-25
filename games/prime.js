export const issue = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

// randomNumber: value from 2 to 113 with a step of 1
// gameplay optimization: the maximum concentration of Primes is in the range from 2 to 113
export const randomNumber = () => Math.ceil(Math.random() * (113 - 1) + 1);

export const correctAnswer = (data) => {
  const iter = (acc) => {
    if (acc > data / 2) {
      return 'yes';
    }
    if (data % acc === 0) {
      return 'no';
    }
    return iter(acc + 1);
  };
  return iter(2);
};
