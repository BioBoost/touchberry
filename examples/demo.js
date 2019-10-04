const BoardBuilder = require('../src/board_builder');

let shield = BoardBuilder.build();
console.log(`Detected ${shield.revision()} board`);
