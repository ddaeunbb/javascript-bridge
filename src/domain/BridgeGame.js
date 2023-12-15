const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../utils/BridgeRandomNumberGenerator');
const { STR_GAMEPROCESS } = require('../constants/string');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #compareBridge;

  constructor(size) {
    this.constructBridge(size);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    const answer = this.#compareBridge.shift();
    if(answer === direction) return { 
      direction,
      match: true,
      process: this.#compareBridge.length > 0 ? STR_GAMEPROCESS.continue : STR_GAMEPROCESS.success};
    return { direction, match: false, process: STR_GAMEPROCESS.fail};
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#compareBridge = [...this.#bridge];
  }

  constructBridge(size) {
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#bridge =[...bridge];
    this.#compareBridge = [...bridge];
  }
}

module.exports = BridgeGame;
