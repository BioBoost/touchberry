const TouchBerry = require('./touchberry_base');
const Mcp9800 = require('mcp9800');

class TouchBerryV2 extends TouchBerry {

  static REVISION = 'touchberry_v2';

  constructor() {
    super(TouchBerryV2.REVISION);
    this.tempSensor = new Mcp9800(this.i2c);
    this.tempSensor.resolution(3);
  }

  temperature() {
    return this.tempSensor.temperature();
  }

}

module.exports = TouchBerryV2;