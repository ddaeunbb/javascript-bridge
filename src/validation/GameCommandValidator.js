const { REGEX_UPPER } = require('../constants/regex');
const CustomError = require('../exception/CustomError');
const { ERROR_MESSAGE } = require('../constants/error');
const { STR_GAMEPROCESS } = require('../constants/string');

/**
 * @classdesc GameCommandValidator
 * 게임 재시도 입력값을 검증한다.
*/
class GameCommandValidator {
  /**
   * 대문자인지 판별한다.
   * @param {string} command
  */
  static isUpperCase(command) {
    if(!REGEX_UPPER.test(command)) throw new CustomError(ERROR_MESSAGE.shouldBeUpperCase);
  }
  /**
   * 'R' or 'Q' 인지 판별한다.
   * @param {string} command
  */
  static isRestartOrQuit(command) {
    const  { restart, quit } = STR_GAMEPROCESS;
    if(!(command === restart || command === quit)) throw new CustomError(ERROR_MESSAGE.shouldBeRorQ);
  }

  static validateGameCommand(command) {
    this.isUpperCase(command);
    this.isRestartOrQuit(command);
  }
}

module.exports = GameCommandValidator;