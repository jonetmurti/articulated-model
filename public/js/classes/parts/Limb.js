import Drawable from '../bases/Drawable.js'

export default class Limb extends Drawable {
    constructor(name, vertices, color, normals) {
        super(name, vertices, color, normals);
    }

    transform() {
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
    }
}