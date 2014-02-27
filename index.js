
/**
 * Module dependencies.
 */

var assert = require('assert');

/**
 * Initialize jstrace middleware with `opts`.
 *
 * @param {Object} opts
 * @return {Function}
 * @api public
 */

module.exports = function(opts){
  assert(opts, 'settings required');
  assert(opts.trace, '.trace function required');
  var trace = opts.trace;

  var ids = 0;

  return function(req, res, next){
    var id = ++ids;

    // start
    trace('express:request:start', {
      header: req.headers,
      method: req.method,
      url: req.url,
      id: id
    });

    // end
    res.on('finish', function(){
      trace('express:request:end', {
        status: res.statusCode,
        header: res._headers,
        id: id
      });
    });

    // close
    req.on('close', function(){
      trace('express:request:close', {
        status: res.statusCode,
        header: res._headers,
        id: id
      });
    });

    next();
  }
};