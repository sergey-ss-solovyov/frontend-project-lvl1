#!/usr/bin/env node

import { greeting, iter } from '../src/index.js';
import { arithmProgression, correctAnswer, issue } from '../games/progression.js';

iter(arithmProgression, correctAnswer, greeting(issue()), 0);
