import Movable from '../bases/Movable.js';
import Transform from '../bases/Transform.js';

export default class Light extends Movable {
    constructor(name, position) {
        super(name, position);
        this.matrix = new Transform();
    }

    transform() {
        this.matrix.translate(this.translation);
    }

    render(gl, program) {
        
    }
}