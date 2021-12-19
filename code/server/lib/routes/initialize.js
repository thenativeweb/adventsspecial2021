'use strict';

const ws281x = require('rpi-ws281x');

const initialize = function ({ configuration }) {
  return function (req, res) {
    if (configuration.isInitialized) {
      return res.status(400).end();
    }

    const { ledCount } = req.body;

    configuration.isInitialized = true;
    configuration.ledCount = ledCount;
    ws281x.configure({ stripType: 'grb', leds: ledCount });

    res.status(200).end();
  };
};

module.exports = { initialize };
