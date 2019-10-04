const TouchBerry = require('./touchberry');
const Mcp9800 = require('mcp9800');

class TouchBerryV2 extends TouchBerry {

  constructor() {
    super();
    this.tempSensor = new Mcp9800(this.i2c);
    this.tempSensor.resolution(3);
  }

  temperature() {
    return this.tempSensor.temperature();
  }

}

module.exports = TouchBerryV2;