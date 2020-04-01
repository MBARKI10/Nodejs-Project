var assert = require('assert');

function result(a,b,c,d) {
  return a+b+c+b
}

var expected = result(1,1,1,1);

assert(expected ===5, "the result of 1,1,1,1 = 4 ");
