#!/usr/bin/env node

import { greeting, iter } from '../src/index.js';
import { questionExpression, correctAnswer, issue } from '../games/calc.js';

iter(questionExpression, correctAnswer, greeting(issue()), 0);
