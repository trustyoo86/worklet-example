'use strict';

const DEG_360 = Math.PI * 2;
const FG_COLOR = '#ffffff';
const CIRCLE_MARGIN = 3;

class Switch {
  static get inputProperties() {
    return ['color', '--switch-on'];
  }

  paint(ctx, geom, props) {
    const { width, height } = geom;
    const halfOfCircleSize = height / 2;
    const innerWidth = width - height;

    const on = parseFloat(props.get('--switch-on').toString());
    const posx = halfOfCircleSize + innerWidth * on;

    this.renderBackground(ctx, width, height, halfOfCircleSize, innerWidth, props);
    this.renderToggleButton(ctx, width, height, halfOfCircleSize, posx);
  }

  renderBackground(ctx, width, height, halfOfCircleSize, innerWidth, props) {
    // switch background
    ctx.fillStyle = props.get('color').toString();
    ctx.beginPath();

    ctx.arc(halfOfCircleSize, halfOfCircleSize, halfOfCircleSize, 0, DEG_360);
    ctx.arc(
      width - halfOfCircleSize,
      halfOfCircleSize,
      halfOfCircleSize,
      0,
      DEG_360
    );

    ctx.rect(halfOfCircleSize, 0, innerWidth, height);
    ctx.fill();
    // end switch background
  }

  renderToggleButton(ctx, width, height, halfOfCircleSize, posx) {
    ctx.fillStyle = FG_COLOR;
    ctx.beginPath();
    ctx.arc(
      posx,
      halfOfCircleSize,
      halfOfCircleSize - CIRCLE_MARGIN,
      0,
      DEG_360
    );
    ctx.fill();
  }
}

module.exports = Switch;