'use strict';

const lightning = function ({ fill, frame, lighten, slice }) {
  fill({ r: 128, g: 64, b: 255 });
  lighten({ factor: 0.25 });

  slice({ from: 12, to: 23 }, ({ rainbow }) => {
    rainbow({ offset: frame });
  });

  slice({ from: 24, to: 35 }, ({ fill }) => {
    fill({ r: 0, g: 128, b: 0 });
  });

  slice({ from: 36, to: 47 }, ({ fill, rainbow, grayscale }) => {
    rainbow();
    grayscale();
  });

  if ([ 0, 2, 4, 6 ].includes(frame % 120)) {
    fill({ r: 255, g: 255, b: 255 });
  }
};

module.exports = { lightning };
