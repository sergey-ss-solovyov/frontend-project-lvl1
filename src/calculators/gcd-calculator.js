// returns the greatest common divisor for two given integer numbers

export default (num1, num2) => {
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
