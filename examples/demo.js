const BoardBuilder = require('../src/board_builder');

let shield = BoardBuilder.build()
console.log(`Detected ${shield.revision()} board`);

shield.touch().on('keydown', (event) => {
  console.log("Getting keydown event " + JSON.stringify(event));
});