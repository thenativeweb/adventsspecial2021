'use strict';

const snow = function ({ slice }) {
  slice({ from: 0, to: 11 }, ({ fill, darken }) => {
    fill({ r: 255, g: 255, b: 255 });
    darken({ factor: 0 });
  });
  slice({ from: 12, to: 23 }, ({ fill, darken }) => {
    fill({ r: 255, g: 255, b: 255 });
    darken({ factor: 0.22 });
  });
  slice({ from: 24, to: 35 }, ({ fill, darken }) => {
    fill({ r: 255, g: 255, b: 255 });
    darken({ factor: 0.44 });
  });
  slice({ from: 36, to: 47 }, ({ fill, darken }) => {
    fill({ r: 255, g: 255, b: 255 });
    darken({ factor: 0.66 });
  });
};

module.exports = { snow };
