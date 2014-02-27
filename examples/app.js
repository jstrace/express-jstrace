
/**
 * Module dependencies.
 */

var express = require('express');
var jstrace = require('jstrace');
var trace = require('..');
var app = express();

app.use(trace({ trace: jstrace }));

app.use(function(req, res, next){
  var buf = new Buffer('Hello World');
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Content-Length', buf.length);

  setTimeout(function(){
    res.end(buf);
  }, Math.random() * 150 | 0);
})

app.listen(3000);
console.log('listening on port 3000');