/* Procedural shading example */
/* the student should make this more interesting */

/* pass interpolated variables to from the vertex */
varying vec2 v_uv;
varying vec3 v_normal;
uniform vec3 light;
uniform vec3 dark;
uniform vec3 green;
uniform float dots;
uniform float radius;
const vec3 lightDir = vec3(0,0,1);
const vec3 baseColor = vec3(1,.8,.4);

void main()
{
    vec3 nhat = normalize(v_normal);
    float camLight = dot(nhat, lightDir);

    float x = v_uv.x * dots;
    float y = v_uv.y * dots;

    float xc = floor(x);
    float yc = floor(y);

    float dx = x-xc-.5;
    float dy = y-yc-.5;

    float d = sqrt(dx*dx + dy*dy);

    float dc = step(d,radius);



    if(mod(xc+yc, 2.) == 1.){
        gl_FragColor = vec4(camLight * mix(light,dark,dc), 1.);
    } else{
        gl_FragColor = vec4(camLight * mix(light,green,dc), 1.);
    }
}

