const { bar } = require('./lib');

function foo () {
  return { bar };
}

module.exports = {
  foo,
};
