'use strict';
const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  // name: require('./package').name,
  name: 'my-engine',
  lazyLoading: true
});
