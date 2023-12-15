const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const BridgeSizeValidator = require('../validation/BridgeSizeValidator');
const MovingValidator = require('../validation/MovingValidator');
const BridgeGame = require('../domain/BridgeGame');

class BridgeGameController {
  #bridgeGame;

  buildBridge() {
    OutputView.printPlay();
    const size = InputView.readBridgeSize();
    BridgeSizeValidator.validateBridgeSize(size);
    this.#bridgeGame = new BridgeGame(size);
  }

  moveOneBlock() {
    const total = [];
    let isEnded = false;
    while(!isEnded) {
      isEnded = this.announceResult(total);
    }
  }

  announceResult(total) {
    const direction = InputView.readMoving();
    MovingValidator.validateMoving(direction);
    const result = this.#bridgeGame.move(direction);
    total.push(result);
    OutputView.printMap(total);
    return result.match;
  }
}

module.exports = BridgeGameController;