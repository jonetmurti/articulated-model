import Movable from '../bases/Movable.js';
import Transform from '../bases/Transform.js';

export default class BlinnPhong extends Movable {
    constructor(name, position, camera) {
        super(name, position);
        this.matrix = new Transform();
        this.camera = camera;
        this.color = [1, 1, 1];

        // For now
        this.k = [0.5, 0.5, 0.5];
        this.beta = 64;
    }

    transform() {
        this.matrix.translate(this.translation);
    }

    render(gl, program) {
        const lightColorLoc = gl.getUniformLocation(program, 'lightColor');
        const lightPosLoc = gl.getUniformLocation(program, 'lightPos');
        const viewPosLoc = gl.getUniformLocation(program, 'viewPos');
        const kLoc = gl.getUniformLocation(program, 'k');

        gl.uniform3fv(lightColorLoc, new Float32Array(this.color));
        gl.uniform3fv(lightPosLoc, new Float32Array(this.position));
        gl.uniform3fv(viewPosLoc, new Float32Array(this.camera.position));
        gl.uniform3fv(kLoc, new Float32Array(this.k));
    }
}