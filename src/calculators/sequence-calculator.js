// returns an array with a sequence from integer numbers
// with given start, length and step targets

export default (start, length, step = 1) => {
  const seq = [];
  seq[0] = start;
  for (let i = 1; i < length; i += 1) {
    seq[i] = seq[i - 1] + step;
  }
  return seq;
};
