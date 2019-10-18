const TouchBerry = require('./touchberry_base');
const i2cbus = require('i2c-bus');
const TouchBerryV1 = require('./touchberry_v1');
const TouchBerryV2 = require('./touchberry_v2');
const TouchBerryV3 = require('./touchberry_v3');

class BoardBuilder {

  static build() {
    let revision = BoardBuilder.detect_board_revision();
    
    let shield = null;
    switch(revision) {
      case TouchBerryV1.REVISION: shield = new TouchBerryV1(); break;
      case TouchBerryV2.REVISION: shield = new TouchBerryV2(); break;
      case TouchBerryV3.REVISION: shield = new TouchBerryV3(); break;
      default: throw 'Failed to detect shield revision';
    }

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
    if (devices.length == 3 && devices.includes(0x1b) && devices.includes(0x60)) {
      return TouchBerryV1.REVISION;
    } else if (devices.includes(0x48)) {     //MCP9800 temp sensor
      return TouchBerryV2.REVISION;
    } else if (devices.includes(0x50)) {    // 24AA64 EEPROM
      return TouchBerryV3.REVISION;
    } else {
      return undefined;
    }
  }
  
}

module.exports = BoardBuilder;