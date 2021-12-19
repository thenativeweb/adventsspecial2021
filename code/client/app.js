'use strict';

const { animateLeds } = require('./lib/animateLeds');
const { lightning, snow, trees } = require('./lib/animations');

(async () => {
  try {
    await animateLeds({
      hostname: 'raspberrypi.local',
      port: 3000,
      ledCount: 48,
      fps: 30
    }, lightning);
  } catch (ex) {
    console.error(ex);
    process.exit(1);
  }
})();
