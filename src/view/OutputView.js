const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../constants/message');
const { totalMapTostrArr } = require('../utils/Convertor');
const { STR_BRIDGE, SYMBOL } = require('../constants/string');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = Object.freeze({
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {Object[]} total
   * direction: 'U' | 'D', match: boolean, process: 'continue' | 'fail' | 'success'
   */
  printMap(total) {
    const strResult = totalMapTostrArr(total);
    Console.print(total);
    const { leftWall, rightWall, line} = STR_BRIDGE;
    strResult.forEach(el => {
      const result = el.split(SYMBOL.blank).join(line);
      Console.print(`${leftWall}${result}${rightWall}`);
    })
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {string} result ('성공' | '실패');
   * @param {number} tryCount (시도한 횟수);
   */
  printResult(result, tryCount) {
    Console.print(`${OUTPUT_MESSAGE.printTotalResult}${result}`)
    Console.print(`${OUTPUT_MESSAGE.printTotalTryCount}${tryCount}`);
  },

  /**
   * '다리 건너기 게임을 시작합니다.' 문구를 출력한다.
   */
  printPlay() {
    Console.print(OUTPUT_MESSAGE.printPlay);
  },

  /**
   * '최종 게임 결과' 문구를 출력한다.
   */
  printResultPhrase() {
    Console.print(OUTPUT_MESSAGE.printResultPhrase);
  }
});

module.exports = OutputView;
