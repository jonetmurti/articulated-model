import Movable from '../bases/Movable.js';

export default class Light extends Movable {
    constructor(name, position) {
        super(name, position);
    }

    transform() {
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
    }

    render(gl, program) {
        
    }
}