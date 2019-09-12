const i2cbus = require('i2c-bus');

const revisions = {
  v2board: 'touchberry_v2',
  v3board: 'touchberry_v3',
  unknown: 'unknown'
};

class TouchBerry {

  constructor() {
    this.setup_i2c();
    this.detect_board_revision();
  }

  revision() {
    return this.boardRevision;
  }

  //////////////////////
  // Internal methods //
  //////////////////////

  setup_i2c() {
    this.i2c = i2cbus.openSync(1);
    if (!this.i2c) console.log("Failed to open i2c bus");
  }

  scan_devices() {
    let devices = this.i2c.scanSync(0x03, 0x77);
    return devices;
  }

  detect_board_revision() {
    let devices = this.scan_devices();
    if (devices.includes(0x48)) {     //MCP9800 temp sensor
      this.boardRevision = revisions.v2board;
    }
  }
  
}

module.exports = TouchBerry;