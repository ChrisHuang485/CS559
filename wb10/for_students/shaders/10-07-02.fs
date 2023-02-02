/* a simple procedural texture */
/* the student should change this to implement a checkerboard */

/* passed interpolated variables to from the vertex */
varying vec2 v_uv;

/* colors for the checkerboard */
uniform vec3 light;
uniform vec3 dark;

/* number of checks over the UV range */
uniform float checks;

uniform float blur;

uniform float radius;

void main()
{
    // float x = v_uv.x * checks;
    // float y = v_uv.y * checks;

    // float xc = floor(x);
    // float yc = floor(y);

    // float dx = x-xc-.5;
    // float dy = y-yc-.5;

    // float d = sqrt(dx*dy);
    // // if the blur is positive, use it for blurring
    // // if the blur is negative - compute the amount of bluring using fwidth
    // float a = blur < .5 ? blur: fwidth(d);
    // float dc = 1.0-smoothstep(radius-a-.5,radius+a-.5,d);


    // gl_FragColor = vec4(mix(light,dark,dc), 1.);

    float x = v_uv.x * checks;
    float y = v_uv.y * checks;

    float xc = floor(x);
    float yc = floor(y);

    float dx = abs(0.5 - (x-xc));
    float dy = abs(0.5 - (y-yc));

    float d = max(dx,dy);

    float dc = smoothstep(.5 -blur, .5, d) -.5;

    if(mod (xc + yc, 2.) ==1.){
        gl_FragColor = vec4(mix(dark,light,dc), 1.);
    } else{
        gl_FragColor = vec4(mix(light,dark,dc), 1.);
    }
}

