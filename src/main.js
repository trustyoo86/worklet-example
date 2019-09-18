'use strict';

const Switch = require('./Switch');
const Checkerboard = require('./Checkerboard');

/**
 * css내 paint 함수 정의
 */
registerPaint('checkerboard', Checkerboard);
registerPaint('switch', Switch);