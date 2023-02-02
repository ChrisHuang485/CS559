/* Procedural shading example */
/* the student should make this more interesting */

/* pass interpolated variables to from the vertex */
varying vec2 v_uv;
uniform sampler2D tex;
uniform vec3 color;
uniform float time;
uniform float checks;
uniform float radius;
varying vec3 v_normal;
const vec3 lightDir = vec3(0,0,1);

void main()
{
    vec3 nhat = normalize(v_normal);
    float camLight = abs(dot(nhat, lightDir));

    vec4 texureBG = texture2D(tex, v_uv);
    vec3 textureColor = vec3(texureBG.x,texureBG.y,texureBG.z);

    float x = v_uv.x * checks;
    float y = v_uv.y * checks;

    float xc = floor(x);
    float yc = floor(y);

    float dx = x-xc-.5;
    float dy = y-yc-.5;

    float d = sqrt(dx*dy);
    float dc = step(d,radius);

    gl_FragColor = vec4(camLight * mix(textureColor,color,dc), time);
}

