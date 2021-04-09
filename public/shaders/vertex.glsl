precision mediump float;

attribute vec3 vertPos;
uniform mat4 objMat;
uniform mat4 modelView;
uniform mat4 projection;

void main() {
    gl_Position = projection * modelView * objMat * vec4(vertPos, 1.0);
}