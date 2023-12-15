const BridgeGame = require('./controller/BridgeGame');

class App {
  #controller = new BridgeGame();
  play() {
    this.#controller.buildBridge();
  }
}

module.exports = App;
