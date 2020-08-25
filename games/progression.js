export const issue = () => 'What number is missing in the progression?';

export const arithmProgression = () => {
  // startNum, progressionStep: random values from 1 to 10 with a step of 1
  // substituteIndex: random value from 1 to 8 with a step of 1
  const startNum = () => Math.ceil(Math.random() * 10);
  const progressionStep = () => Math.ceil(Math.random() * 10);
  const substituteIndex = () => Math.ceil(Math.random() * 8);
  const progression = new Array(10);
  progression[0] = startNum();
  const step = progressionStep();
  for (let i = 1; i < progression.length; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  progression[substituteIndex()] = '..';
  return progression.join(' ');
};

export const correctAnswer = (data) => {
  const progression = data.split(' ');
  const substIndex = progression.indexOf('..');
  return String((+progression[substIndex - 1] + +progression[substIndex + 1]) / 2);
};
