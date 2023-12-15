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
    const direction = InputView.readMoving();
    MovingValidator.validateMoving(direction);
  }
}

module.exports = BridgeGameController;