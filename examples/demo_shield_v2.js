const TouchBerry = require('touchberry');

let shield = new TouchBerry.TouchBerryV2()
console.log(`Using ${shield.revision()} board`);

shield.touch().on('keydown', (event) => {
  console.log("Getting keydown event " + JSON.stringify(event));
});

shield.rgbledbar().set_led(0, {red: 100, green: 0, blue: 0});
shield.rgbledbar().set_led(1, {red: 0, green: 100, blue: 0});
shield.rgbledbar().set_led(2, {red: 0, green: 0, blue: 100});

setTimeout(() => {
  shield.rgbledbar().all_off();
}, 1000);