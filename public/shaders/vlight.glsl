precision mediump float;

attribute vec3 vertPos;
attribute vec3 vertNormal;
uniform mat4 objMat;
uniform mat4 modelView;
uniform mat4 projection;
varying vec3 fragNormal;
varying vec3 fragPos;

void main() {
    fragNormal = (objMat * vec4(vertNormal, 0.0)).xyz;
    fragPos = (objMat * vec4(vertPos, 1.0)).xyz;
    gl_Position = projection * modelView * objMat * vec4(vertPos, 1.0);
}