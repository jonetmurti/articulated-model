import { degToRad } from '../libs/utils.js';
import TreeNode from './TreeNode.js';

// Abstract class
export default class Movable extends TreeNode {
    constructor(sibling, child, position) {
        super(sibling, child);
        this.position = position;
        this.translation = [0, 0, 0];
        this.rotationX = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
        this.rotationY = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
        this.rotationZ = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];

        if (new.target === Movable) {
            throw new TypeError("Cannot construct Movable instances directly");
        }
    }

    // render: Abstract method

    // transform: Abstract method

    translateX(dx) {
        this.translation[0] = dx;
    }

    translateY(dy) {
        this.translation[1] = dy;
    }

    translateZ(dz) {
        this.translation[2] = dz;
    }

    rotateX(deg) {
        const rad = degToRad(deg);
        // TODO: update rotation matrix

    }

    rotateY(deg) {
        const rad = degToRad(deg);
        // TODO: update rotation matrix
    }

    rotateZ(deg) {
        const rad = degToRad(deg);
        // TODO: update rotation matrix
    }
}