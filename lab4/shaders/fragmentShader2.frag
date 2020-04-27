uniform sampler2D texture1;
varying vec2 vUv;

void main() {

  if (vUv.x < 0.5 && vUv.y < 0.5) {
    gl_FragColor = texture2D(texture1, vUv * 2.0);
  }

  if (vUv.x < 0.5 && vUv.y > 0.5) {
    gl_FragColor = texture2D(texture1, vec2(vUv.x * 2.0, vUv.y * 2.0 - 1.0));
  }

  if (vUv.x > 0.5 && vUv.y < 0.5) {
    gl_FragColor = texture2D(texture1, vec2(vUv.x * 2.0 - 1.0, vUv.y * 2.0));
  }

  if (vUv.x > 0.5 && vUv.y > 0.5) {
    gl_FragColor = texture2D(texture1, vUv * 2.0 - 1.0);
  }
}
