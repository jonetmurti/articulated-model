import { degToRad } from '../../libs/utils.js';
import TreeNode from './TreeNode.js';

// Abstract class
export default class Movable extends TreeNode {
    constructor(name, position) {
        super(name);
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
        var c = Math.cos(rad);
        var s = Math.sin(rad);
        var mv1 = rotationX[1], mv5 = rotationX[5], mv9 = rotationX[9];

        rotationX[1] = rotationX[1]*c-rotationX[2]*s;
        rotationX[5] = rotationX[5]*c-rotationX[6]*s;
        rotationX[9] = rotationX[9]*c-rotationX[10]*s;

        rotationX[2] = rotationX[2]*c+mv1*s;
        rotationX[6] = rotationX[6]*c+mv5*s;
        rotationX[10] = rotationX[10]*c+mv9*s;
    }

    rotateY(deg) {
        const rad = degToRad(deg);
        // TODO: update rotation matrix
        var c = Math.cos(rad);
        var s = Math.sin(rad);
        var mv0 = rotationY[0], mv4 = rotationY[4], mv8 = rotationY[8];

        rotationY[0] = c*rotationY[0]+s*rotationY[2];
        rotationY[4] = c*rotationY[4]+s*rotationY[6];
        rotationY[8] = c*rotationY[8]+s*rotationY[10];

        rotationY[2] = c*rotationY[2]-s*mv0;
        rotationY[6] = c*rotationY[6]-s*mv4;
        rotationY[10] = c*rotationY[10]-s*mv8;
    }

    rotateZ(deg) {
        const rad = degToRad(deg);
        // TODO: update rotation matrix
        var c = Math.cos(rad);
        var s = Math.sin(rad);
        var mv0 = rotationZ[0], mv4 = rotationZ[4], mv8 = rotationZ[8]; 

        rotationZ[0] = c*rotationZ[0]-s*rotationZ[1];
        rotationZ[4] = c*rotationZ[4]-s*rotationZ[5];
        rotationZ[8] = c*rotationZ[8]-s*rotationZ[9];
        rotationZ[1] = c*rotationZ[1]+s*mv0;
        rotationZ[5] = c*rotationZ[5]+s*mv4;
        rotationZ[9] = c*rotationZ[9]+s*mv8;
    }
}