const TouchBerry = require('./touchberry_base');

class TouchBerryV3 extends TouchBerry {

  static REVISION = 'touchberry_v3';

  constructor() {
    super(TouchBerryV3.REVISION);
  }

}

module.exports = TouchBerryV3;