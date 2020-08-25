#!/usr/bin/env node

import { greeting, iter } from '../src/index.js';
import { operands, correctAnswer, issue } from '../games/calc.js';

iter(operands, correctAnswer, greeting(issue()), 0);
