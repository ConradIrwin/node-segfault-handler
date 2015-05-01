#!/usr/bin/env node
var SegfaultHandler = require('./'); // you'd use require('segfault-handler')

SegfaultHandler.registerHandler("traces");

SegfaultHandler.causeIllegalInstruction(); // simulates a buggy native module that dereferences NULL
SegfaultHandler.causeAbort(); // simulates a buggy native module that dereferences NULL
SegfaultHandler.causeSegfault(); // simulates a buggy native module that dereferences NULL
