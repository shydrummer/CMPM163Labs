    uniform float u_time;
    varying vec3 vUv;

    vec4 getColor(){

      return vec4(abs(sin(u_time)), 2, 0.9, 1.000);
    }

    void main() {

       vec4 result = getColor();
       gl_FragColor = result;
    }