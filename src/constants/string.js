const STR_BRIDGE = Object.freeze({
  up: 'U',
  down: 'D',
  line: ' | ',
  leftWall: '[ ',
  rightWall: ' ]',
  O: 'O',
  X: 'X',
});

const SYMBOL = Object.freeze({
  blank: '',
  space: ' ',
})

const STR_GAMEPROCESS = Object.freeze({
  continue: 'continue',
  fail: 'fail',
  success: 'success',
  restart: 'R',
  quit: 'Q',
})

exports.STR_BRIDGE = STR_BRIDGE;
exports.SYMBOL = SYMBOL;
exports.STR_GAMEPROCESS = STR_GAMEPROCESS;