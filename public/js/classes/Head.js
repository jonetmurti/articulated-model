import Drawable from './Drawable.js'

export default class Head extends Drawable {
    constructor(sibling, child, vertices, color, normals) {
        super(sibling, child, vertices, color, normals);
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