const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../constants/message');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readBridgeSize() {
    let result = '';
    Console.readLine(INPUT_MESSAGE.readBridgeSize, (input) => {result = input})
    return result;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let result = '';
    Console.readLine(INPUT_MESSAGE.readMoving, (input) => {result = input})
    return result;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let result = '';
    Console.readLine(INPUT_MESSAGE.readGameCommand, (input) => {result = input})
    return result;
  },
};

module.exports = InputView;
