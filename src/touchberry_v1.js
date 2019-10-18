const TouchBerry = require('./touchberry_base');

class TouchBerryV1 extends TouchBerry {

  static REVISION = 'touchberry_v1';

  constructor() {
    super(TouchBerryV1.REVISION);
  }

}

module.exports = TouchBerryV1;