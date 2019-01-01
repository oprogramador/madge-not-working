const requireDirectory = require('require-directory');

const requireDirectoryOptions = {
  exclude: /^index/,
};

module.exports = requireDirectory(module, requireDirectoryOptions);
