precision mediump float;

attribute vec3 vertPos;
uniform mat4 objMat;

void main() {
    gl_Position = objMat * vec4(vertPos, 1.0);
}