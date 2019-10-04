const TouchBerry = require('./touchberry');
const i2cbus = require('i2c-bus');
const TouchBerryV2 = require('./touchberry_v2');
const TouchBerryV3 = require('./touchberry_v3');

const revisions = {
  v2board: 'touchberry_v2',
  v3board: 'touchberry_v3',
  unknown: 'unknown'
};

class BoardBuilder {

    static build() {
      console.log("Building you a nice touchberry board.");
      let revision = BoardBuilder.detect_board_revision();

      let shield = undefined;
      if (revision === revisions.v2board) {
        shield = new TouchBerryV2();
      } else {
        shield = new TouchBerry();
      }

      shield.boardRevision = revision;
      return shield;
    }
  
    //////////////////////
    // Internal methods //
    //////////////////////
  
    static scan_devices() {
      this.i2c = i2cbus.openSync(1);
      if (!this.i2c) console.log("Failed to open i2c bus");
      let devices = this.i2c.scanSync(0x03, 0x77);
      this.i2c.closeSync();
      return devices;
    }
  
    static detect_board_revision() {
      let devices = this.scan_devices();
      if (devices.includes(0x48)) {     //MCP9800 temp sensor
        return revisions.v2board;
      } else {
        return revisions.unknown;
      }
    }
    
  }
  
  module.exports = BoardBuilder;