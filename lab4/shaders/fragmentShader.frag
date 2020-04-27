uniform sampler2D texture1;
varying vec2 vUv;

void main() {
 // gl_FragColor = vec4(vUv.x, vUv.y, 0, 0); //rgba
  gl_FragColor = texture2D(texture1, vUv);
}