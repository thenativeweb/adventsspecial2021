'use strict';

const trees = function ({ darken, fill, set }) {
  fill({ r: 0, g: 0, b: 255 });
  darken({ factor: 0.7 });

  [ 2, 3, 10, 11, 20, 21, 27, 28, 29, 37, 38, 46, 47 ].forEach(index => {
    set({ index, r: 0, g: 255, b: 96 });
  });
};

module.exports = { trees };
