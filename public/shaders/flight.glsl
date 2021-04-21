precision mediump float;

varying vec3 fragNormal;
varying vec3 fragPos;
uniform vec3 color;
uniform vec3 lightColor;
uniform vec3 lightPos;
uniform vec3 viewPos;
uniform vec3 k;

void main() {
    vec3 lightDir = normalize(lightPos - fragPos);
    vec3 viewDir = normalize(viewPos - fragPos);
    vec3 halfwayDir = normalize(lightDir + viewDir);

    vec3 ambient = k.x * lightColor;
    vec3 diffuse = k.y * max(
        dot(normalize(fragNormal), lightDir),
        0.0
    ) * lightColor;

    vec3 intensity = ambient + diffuse;

    gl_FragColor = vec4(color * intensity, 1.0);
}