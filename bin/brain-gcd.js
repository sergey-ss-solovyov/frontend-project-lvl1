#!/usr/bin/env node

import { greeting, iter } from '../src/index.js';
import { pairOfNumbers, correctAnswer, issue } from '../games/gcd.js';

iter(pairOfNumbers, correctAnswer, greeting(issue()), 0);
