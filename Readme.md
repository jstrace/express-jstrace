# express-jstrace

  jstrace middleware for express.

## Installation

```
$ npm install express-jstrace
```

## Example

```js
var trace = require('express-jstrace');
var jstrace = require('jstrace');
app.use(trace({ trace: jstrace }));
```

## Probes

 - `express:request:start` request started
 - `express:request:end` response finished
 - `express:request:close` socket closed

# License

  MIT
