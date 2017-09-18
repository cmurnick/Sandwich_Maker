"use strict";

const data = require('./data');
const dom = require('./dom');
const eventListener = require('./eventListener');

data.initializer();
dom.domStrings();
eventListener.rewriteEvent();