const { foo } = require('../foo');

console.log('foo', foo); // undefined because of a circular dependency

module.exports = x => foo(foo(x));
