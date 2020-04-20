    uniform float u_time;
    uniform vec2 u_resolution;

    void main( void ) {

    vec2 position = ( gl_FragCoord.xy / u_resolution.xy );

    float color = 0.90;
    color += sin( position.x * cos( u_time / 35.0 ) * 80.0 ) + cos( position.y * cos( u_time / 160.0 ) * 16.0 );
    color += sin( position.y * sin( u_time / 16.0 ) * 40.0 ) + cos( position.x * sin( u_time / 90.0 ) * 40.0 );
    color += sin( position.x * sin( u_time / 25.0 ) * 10.0 ) + sin( position.y * sin( u_time / 5.0 ) * 90.0 );
    color *= sin( u_time / 10.0 ) * 0.5;

    gl_FragColor = vec4( vec3( color, color * 0.65, sin( color + u_time / 3.0 ) * 0.75 ), 1.0 );

    }