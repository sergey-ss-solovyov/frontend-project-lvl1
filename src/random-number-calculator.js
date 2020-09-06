// returns a random number beetwen min and max including both of them

export default (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
