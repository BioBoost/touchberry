class TouchBerry {

    constructor() {
      console.log("Building TouchBerry instance");
      this.boardRevision = 'unknown';
    }
  
    revision() {
      return this.boardRevision;
    }
}

module.exports = TouchBerry;