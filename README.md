# TouchBerry Shield Library

NodeJS library for the TouchBerry shield. Currently only tested on the Raspberry Pi 3 using a v2 shield.

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
