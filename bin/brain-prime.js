#!/usr/bin/env node

import { greeting, iter } from '../src/index.js';
import { randomNumber, correctAnswer, issue } from '../games/prime.js';

iter(randomNumber, correctAnswer, greeting(issue()), 0);
