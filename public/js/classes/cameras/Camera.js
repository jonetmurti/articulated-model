import Movable from '../bases/Movable.js';
import {
    normalize,
    subtract,
    cross,
    negate,
    dot
} from '../../libs/vector.js';
import {
    degToRad
} from '../../libs/utils.js';
import {
    farClip, 
    nearClip,
    fovY,
    aspect
} from '../../const/canvas-const.js';

export default class Camera extends Movable {
    constructor(name, position) {
        super(name, position);
        this.projection = this.perspective();
        this.modelView = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
    }

    perspective() {
        const cotan = Math.tan(degToRad(90) - degToRad(fovY)/2);
        const rangeZ = nearClip - farClip;

        return [
            cotan/aspect, 0, 0, 0,
            0, cotan, 0, 0,
            0, 0, -1*(nearClip + farClip)/rangeZ, 1,
            0, 0, 2*farClip*nearClip/rangeZ, 0
        ];

    }

    transform() {
        let at = [0, 0, 0];
        let up = [0, 1, 0];

        for (let i = 0; i < this.position.length; i++) {
            this.position[i] = this.translation[i];
        }

        // TODO: Rotate camera

        let zaxis = normalize(subtract(at, this.position));
        let xaxis = normalize(cross(zaxis, up));
        let yaxis = cross(xaxis, zaxis);

        negate(xaxis);

        this.modelView = [
            xaxis[0], yaxis[0], zaxis[0], 0, 
            xaxis[1], yaxis[1], zaxis[1], 0,
            xaxis[2], yaxis[2], zaxis[2], 0,
            -dot(xaxis, this.position), -dot(yaxis, this.position), -dot(zaxis, this.position), 1
        ];
    }

    render(gl, program) {
        const projectionLoc = gl.getUniformLocation(program, 'projection'); 
        const modelViewLoc = gl.getUniformLocation(program, 'modelView');

        gl.uniformMatrix4fv(projectionLoc, false, new Float32Array(this.projection));
        gl.uniformMatrix4fv(modelViewLoc, false, new Float32Array(this.modelView));
    }
}