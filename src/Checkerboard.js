/**
 * checkboard (격자무늬) example
 * textarea내 격자무늬를 표시한다.
 */
'use strict';
class CheckerboardPainter {
  constructor() {

  }

  /**
   * paint 함수
   * @param {Object} ctx canvas context
   * @param {Object} geom geom 객체 (css내 property 객체)
   */
  paint(ctx, geom) {
    const colors = ['red', 'green', 'blue'];
    const size = 50;

    /**
     * css property에서 입력된 값들을 기준으로 loop돌며 격자 무늬를 생성한다.
     */
    for (let y = 0; y < geom.height / size; y++) {
      for (let x = 0; x < geom.width / size; x++) {
        const color = colors[(x + y) % colors.length];
        // context path 시작
        ctx.beginPath();
        // fillStyle 정의
        ctx.fillStyle = color;
        ctx.rect(x * size, y * size, size, size);
        ctx.fill();
      }
    }
  }
}

module.exports = CheckerboardPainter;