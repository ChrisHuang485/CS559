/* Procedural shading example */
/* the student should make this more interesting */

/* pass interpolated variables to from the vertex */
varying vec2 v_uv;

uniform vec3 light;
uniform vec3 dark;

uniform float brick;


void main()
{
    float x = v_uv.x * brick ;
    float y = v_uv.y * brick ;

    float xc = floor(x);
    float yc = floor(y);

    float dx = x-xc-.5;
    float dy = y-yc-.5;

    float d = sqrt(dx*dy);
    float dc = step(d,.3);
    

    gl_FragColor = vec4(mix(light,dark,dc), 1.);


    
}

