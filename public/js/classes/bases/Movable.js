import { degToRad } from '../../libs/utils.js';
import TreeNode from './TreeNode.js';
import {
    worldRange,
    screenRange
} from '../../const/canvas-const.js';

// Abstract class
export default class Movable extends TreeNode {
    constructor(name, position) {
        super(name);
        this.position = position;
        this.translation = [0, 0, 0];
        this.rotation = [0, 0, 0];

        // TODO: move implementation to Transform
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

    setTransX(dx) {
        this.translation[0] = dx / worldRange * screenRange;
    }

    setTransY(dy) {
        this.translation[1] = dy / worldRange * screenRange;
    }

    setTransZ(dz) {
        this.translation[2] = dz / worldRange * screenRange;
    }

    setRotX(deg) {
        this.rotation[0] = deg;
    }

    setRotY(deg) {
        this.rotation[1] = deg;
    }

    setRotZ(deg) {
        this.rotation[2] = deg;
    }
}