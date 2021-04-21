precision mediump float;

varying vec2 fragTexCoor;
varying vec3 fragNormal;
varying vec3 fragPos;
uniform vec3 color;
uniform vec3 lightColor;
uniform vec3 lightPos;
uniform vec3 viewPos;
uniform vec3 k;
uniform float textureOn;
uniform sampler2D sampler;

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

    if (textureOn > 0.5) {
        gl_FragColor = vec4(texture2D(sampler, fragTexCoor).rgb * intensity, 1.0);
    } else {
        gl_FragColor = vec4(color * intensity, 1.0);
    }
}