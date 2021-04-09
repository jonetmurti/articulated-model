import {
    multiplyMat
} from '../../libs/matrix.js';

export default class Transform {
    constructor() {
        this.matrix = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
    }

    reset() {
        this.matrix = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
    }

    translate(dist) {
        const transformMat = [
            1, 0, 0, dist[0],
            0, 1, 0, dist[1],
            0, 0, 1, dist[2],
            0, 0, 0, 1
        ];
        this.matrix = multiplyMat(transformMat, this.matrix);
    }

    rotateX(deg) {
        // TODO: implement rotation on x axis
    }

    rotateY(deg) {
        // TODO: implement rotation on y axis
    }

    rotateZ(deg) {
        // TODO: implement rotation on z axis
    }

    scale(k) {
        // TODO: implement scale
    }
}