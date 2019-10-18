# TouchBerry Shield Library

NodeJS library for the TouchBerry shield. Currently only tested on the Raspberry Pi 3.

Currently only supports the touch and led bar for all revisions of the shield (v1, v2 and v3).

## Usage

Let the builder create a shield instance for you (detects the shields based on available i2c devices):

```js
const TouchBerry = require('touchberry');

let shield = TouchBerry.BoardBuilder.build()
console.log(`Detected ${shield.revision()} board`);
```

Or create instance manually:

```js
const TouchBerry = require('touchberry');

let shield = new TouchBerry.TouchBerryV2()
console.log(`Using ${shield.revision()} board`);
```

## Example

Basic example on how to interact with the touch and ledbar:

```js
const TouchBerry = require('touchberry');

let shield = TouchBerry.BoardBuilder.build()
console.log(`Detected ${shield.revision()} board`);

shield.touch().on('keydown', (event) => {
  console.log("Getting keydown event " + JSON.stringify(event));
});

shield.rgbledbar().set_led(0, {red: 100, green: 0, blue: 0});
shield.rgbledbar().set_led(1, {red: 0, green: 100, blue: 0});
shield.rgbledbar().set_led(2, {red: 0, green: 0, blue: 100});

setTimeout(() => {
  shield.rgbledbar().all_off();
}, 1000);
```
