const rewireLess = require('react-app-rewire-less');
module.exports = function override(config, env) {
  config = rewireLess(config, env);
  return config;
};
