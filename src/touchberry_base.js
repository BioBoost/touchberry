const i2cbus = require('i2c-bus');
const TouchKey = require('touchkey');
const RGBLedBar = require('rgbledbar');

class TouchBerry {

    constructor(revision='unknown') {
      this.boardRevision = revision;
      this.i2c = i2cbus.openSync(1);
      if (!this.i2c) throw 'Failed to open i2c bus';
      this.keypad = new TouchKey(this.i2c);
      this.ledbar = new RGBLedBar(this.i2c);
    }

    revision() {
      return this.boardRevision;
    }

    touch() {
      return this.keypad;
    }

    rgbledbar() {
      return this.ledbar;
    }
}

module.exports = TouchBerry;