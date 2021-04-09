import Movable from './Movable.js';
import Transform from './Transform.js';
import { 
    transposeMat
} from '../../libs/matrix.js';

export default class Drawable extends Movable {
    constructor(name, position, model) {
        super(name, position);
        this.vertices = model.vertices;
        this.color = model.color;
        this.normals = model.normals;
        this.dof = model.dof;
        this.objectMat = new Transform();

        if (new.target === Drawable) {
            throw new TypeError("Cannot construct Drawable instances directly");
        }
    }

    transform() {
        this.objectMat.reset();
        for (const motion of this.dof) {
            switch (motion) {
                case 'trans':
                    this.objectMat.translate(this.translation);
                    break;
                
                case 'rot-x':
                    // TODO: this.objectMat.rotateX(this.rotation[0]);
                    break;

                case 'rot-y':
                    // TODO: this.objectMat.rotateX(this.rotation[1]);
                    break;

                case 'rot-z':
                    // TODO: this.objectMat.rotateX(this.rotation[2]);
                    break;

                case 'scale':
                    break;
                
                default:
                    break;
            }
        }

        this.objectMat.translate(this.position);
        // TODO: transform with stack head
    }

    render(gl, program) {
        const matrix = transposeMat(this.objectMat.matrix);

        // TODO: consider normal, color, and texture?
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