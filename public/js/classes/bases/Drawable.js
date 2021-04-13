import Movable from './Movable.js';
import Transform from './Transform.js';
import { 
    transposeMat
} from '../../libs/matrix.js';

export default class Drawable extends Movable {
    constructor(model) {
        super(model.name, model.position);
        this.vertices = model.vertices;
        this.color = model.color;
        this.normals = model.normals;
        this.dof = model.dof;
        this.pivot = model.pivot;
        this.objectMat = new Transform();
        this.parentMat = null;

        if (new.target === Drawable) {
            throw new TypeError("Cannot construct Drawable instances directly");
        }
    }

    setParentMat(parentMat) {
        this.parentMat = parentMat;
    }

    transform() {
        this.objectMat.reset();

        if (this.pivot)
            this.objectMat.translate(this.pivot, -1);

        for (const motion of this.dof) {
            switch (motion) {
                case 'trans':
                    this.objectMat.translate(this.translation);
                    break;
                
                case 'rot-x':
                    this.objectMat.rotateX(this.rotation[0]);
                    break;

                case 'rot-y':
                    this.objectMat.rotateY(this.rotation[1]);
                    break;

                case 'rot-z':
                    this.objectMat.rotateZ(this.rotation[2]);
                    break;

                case 'scale':
                    // this.objectMat.scale(k);
                    break;
                
                default:
                    break;
            }
        }

        if (this.pivot)
            this.objectMat.translate(this.pivot);

        this.objectMat.translate(this.position);
        if (this.parentMat) {
            this.objectMat.multiply(this.parentMat);
        }
    }

    render(gl, program) {
        const matrix = transposeMat(this.objectMat.matrix);

        // TODO: consider normal, color, and texture?
        let buffer = gl.createBuffer();
        const positionLoc = gl.getAttribLocation(program, 'vertPos');
        const objMatLoc = gl.getUniformLocation(program, 'objMat');
        const colorLoc = gl.getUniformLocation(program, 'color');

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

        gl.uniform3fv(colorLoc, new Float32Array(this.color));

        gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length/3);
    }
}