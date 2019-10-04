const i2cbus = require('i2c-bus');
const TouchKey = require('touchkey');

class TouchBerry {

    constructor() {
      console.log("Building TouchBerry instance");
      this.boardRevision = 'unknown';

      this.i2c = i2cbus.openSync(1);
      if (!this.i2c) throw 'Failed to open i2c bus';
      this.keypad = new TouchKey(this.i2c);
    }

    revision() {
      return this.boardRevision;
    }

    touch() {
      return this.keypad;
    }
}

module.exports = TouchBerry;
