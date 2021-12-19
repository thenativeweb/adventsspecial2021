'use strict';

const Color = require('color');

class Colors {
  constructor ({ count }) {
    this.values = Array(count).fill(
      Color({ r: 0, g: 0, b: 0 }), 0, count
    );
  }

  set ({ index, r, g, b }) {
    this.values[index] = Color({ r, g, b });
  }

  fill ({ r, g, b }) {
    for (let i = 0; i < this.values.length; i++) {
      this.values[i] = Color({ r, g, b });
    }
  }

  rainbow ({ offset = 0, factor = 0.3 } = {}) {
    for (let i = 0; i < this.values.length; i++) {
      const r = Math.sin(i * factor + 0) * 127 + 128;
      const g = Math.sin(i * factor + 2) * 127 + 128;
      const b = Math.sin(i * factor + 4) * 127 + 128;

      this.values[(i + offset) % this.values.length] = Color({ r, g, b });
    }
  }

  lighten ({ factor }) {
    for (let i = 0; i < this.values.length; i++) {
      this.values[i] = this.values[i].lighten(factor);
    }
  }

  darken ({ factor }) {
    for (let i = 0; i < this.values.length; i++) {
      this.values[i] = this.values[i].darken(factor);
    }
  }

  grayscale () {
    for (let i = 0; i < this.values.length; i++) {
      this.values[i] = this.values[i].grayscale();
    }
  }
}

module.exports = { Colors };
