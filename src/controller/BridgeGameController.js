const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const BridgeSizeValidator = require('../validation/BridgeSizeValidator');
const BridgeGame = require('../domain/BridgeGame');

class BridgeGameController {
  #bridgeGame;

  buildBridge() {
    OutputView.printPlay();
    const size = InputView.readBridgeSize();
    BridgeSizeValidator.validateBridgeSize(size);
    this.#bridgeGame = new BridgeGame(size);
  }
}

module.exports = BridgeGameController;