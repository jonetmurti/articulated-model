import Movable from './Movable.js';

export default class Drawable extends Movable {
    constructor(sibling, child, vertices, color, normals) {
        super(sibling, child, null);
        this.vertices = vertices;
        this.color = color;
        this.normals = normals;

        if (new.target === Drawable) {
            throw new TypeError("Cannot construct Drawable instances directly");
        }
    }

    // transform: Abstract method

    render(gl, program) {
        const matrix = this.transform();

        console.log(matrix);

        // TODO: consider normal and color
        let buffer = gl.createBuffer();
        const positionLoc = gl.getAttribLocation(program, 'vertPos');
        const objMatLoc = gl.getUniformLocation(program, 'objMat');

        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
        gl.vertexAttribPointer(
            positionLoc,
            3,
            gl.FLOAT,
            gl.FALSE,
            3 * Float32Array.BYTES_PER_ELEMENT,
            0
        );
        gl.enableVertexAttribArray(positionLoc);

        gl.uniformMatrix4fv(objMatLoc, false, new Float32Array(matrix));

        gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length/3);
    }
}