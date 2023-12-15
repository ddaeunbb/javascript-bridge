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

const STR_GAMERESULT = Object.freeze({
  success: '성공',
  fail: '실패',
});

exports.STR_BRIDGE = STR_BRIDGE;
exports.SYMBOL = SYMBOL;
exports.STR_GAMEPROCESS = STR_GAMEPROCESS;
exports.STR_GAMERESULT = STR_GAMERESULT;