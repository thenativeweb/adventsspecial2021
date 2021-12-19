'use strict';

const ws281x = require('rpi-ws281x');

const render = function ({ configuration }) {
  return function (req, res) {
    if (!configuration.isInitialized) {
      return res.status(400).end();
    }

    const { colors } = req.body;
    const pixels = new Uint32Array(configuration.ledCount);

    for (let i = 0; i < configuration.ledCount; i++) {
      pixels[i] = colors[i];
    }

    ws281x.render(pixels);
    res.status(200).end();
  };
};

module.exports = { render };
