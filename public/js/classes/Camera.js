import Movable from './Movable.js';

export default class Camera extends Movable {
    constructor() {
        super(sibling, child, position);
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