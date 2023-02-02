/* Procedural shading example */
/* the student should make this more interesting */

/* pass interpolated variables to from the vertex */
varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_position;
uniform float shininess;
const vec3 lightDirWorld = vec3(0,0,1);
const vec3 specularColor = vec3(1,1,1);
uniform sampler2D tex;

void main()
{
    vec3 viewDir = normalize(- v_position);
    vec3 lightDir = normalize((viewMatrix * vec4(lightDirWorld,0.)).xyz);
    vec3 nhat = normalize(v_normal);
    vec3 reflDir = reflect(-lightDir,nhat);

    float camLight = max(dot(viewDir, reflDir),0.);
    vec4 texureBG = texture2D(tex, v_uv);
    vec3 textureColor = vec3(texureBG.x,texureBG.y,texureBG.z);
    gl_FragColor = vec4(textureColor * pow(camLight, pow(2.,shininess)),1);
}

