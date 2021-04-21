precision mediump float;

attribute vec2 texCoor;
attribute vec3 vertPos;
attribute vec3 vertNormal;
uniform mat4 objMat;
uniform mat4 modelView;
uniform mat4 projection;
varying vec3 fragNormal;
varying vec3 fragPos;
varying vec2 fragTexCoor;

void main() {
    fragNormal = (objMat * vec4(vertNormal, 0.0)).xyz;
    fragTexCoor = vec2(texCoor.x, 1.0 - texCoor.y);
    fragPos = (objMat * vec4(vertPos, 1.0)).xyz;
    gl_Position = projection * modelView * objMat * vec4(vertPos, 1.0);
}