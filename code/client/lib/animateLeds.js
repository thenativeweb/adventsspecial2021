'use strict';

const axios = require('axios');
const { Colors } = require('./Colors');
const { setTimeout } = require('timers/promises');

const animateLeds = async function ({ hostname, port, ledCount, fps }, fn) {
  let frame = 0;
  let interval = 1_000 / fps;

  const colors = new Colors({ count: ledCount });

  try {
    await axios({
      method: 'POST',
      url: `http://${hostname}:${port}/initialize`,
      data: { ledCount }
    });
  } catch (ex) {
    if (ex.response.status !== 400) {
      throw ex;
    }
  }

  const slice = function ({ from, to }, fn) {
    const subColors = new Colors({ count: to - from + 1 });

    fn({
      frame,
      slice,
      set: subColors.set.bind(subColors),
      fill: subColors.fill.bind(subColors),
      rainbow: subColors.rainbow.bind(subColors),
      lighten: subColors.lighten.bind(subColors),
      darken: subColors.darken.bind(subColors),
      grayscale: subColors.grayscale.bind(subColors)
    });

    for (let i = 0; i < subColors.values.length; i++) {
      colors.values[i + from] = subColors.values[i];
    }
  };

  const render = async function () {
    await axios({
      method: 'POST',
      url: `http://${hostname}:${port}/render`,
      data: { colors: colors.values.map(color => color.rgbNumber()) }
    });
  };

  for (;;) {
    fn({
      frame,
      slice,
      set: colors.set.bind(colors),
      fill: colors.fill.bind(colors),
      rainbow: colors.rainbow.bind(colors),
      lighten: colors.lighten.bind(colors),
      darken: colors.darken.bind(colors),
      grayscale: colors.grayscale.bind(colors)
    });
    await render();
    await setTimeout(interval);

    frame++;
  }
};

module.exports = { animateLeds };
