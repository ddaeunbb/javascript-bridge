const { Console } = require('@woowacourse/mission-utils');
const BridgeGameController = require('./controller/BridgeGameController');

class App {
  #controller = new BridgeGameController();
  play() {
    try{
      this.#controller.buildBridge();
      this.#controller.moveOneByOne();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

module.exports = App;
