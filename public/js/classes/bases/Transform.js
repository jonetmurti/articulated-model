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
        const rad = degToRad(deg);

        var c = Math.cos(rad);
        var s = Math.sin(rad);
        var mv1 = this.matrix[1], mv5 = this.matrix[5], mv9 = this.matrix[9];

        this.matrix[1] = this.matrix[1]*c-this.matrix[2]*s;
        this.matrix[5] = this.matrix[5]*c-this.matrix[6]*s;
        this.matrix[9] = this.matrix[9]*c-this.matrix[10]*s;

        this.matrix[2] = this.matrix[2]*c+mv1*s;
        this.matrix[6] = this.matrix[6]*c+mv5*s;
        this.matrix[10] = this.matrix[10]*c+mv9*s;
        /* 
            this.matrix = [
                1, 0, 0, 0,
                0, c,-s, 0,
                0, s, c, 0,
                0, 0, 0, 1
            ];
        */
    }

    rotateY(deg) {
        // TODO: implement rotation on y axis
        const rad = degToRad(deg);

        var c = Math.cos(rad);
        var s = Math.sin(rad);
        var mv0 = this.matrix[0], mv4 = this.matrix[4], mv8 = this.matrix[8];

        this.matrix[0] = c*this.matrix[0]+s*this.matrix[2];
        this.matrix[4] = c*this.matrix[4]+s*this.matrix[6];
        this.matrix[8] = c*this.matrix[8]+s*this.matrix[10];

        this.matrix[2] = c*this.matrix[2]-s*mv0;
        this.matrix[6] = c*this.matrix[6]-s*mv4;
        this.matrix[10] = c*this.matrix[10]-s*mv8;
        /* 
            this.matrix = [
                c,-0, s, 0,
                0, 1, 0, 0,
                -s, 0, c, 0,
                0, 0, 0, 1
            ];
        */
    }

    rotateZ(deg) {
        // TODO: implement rotation on z axis
        const rad = degToRad(deg);

        var c = Math.cos(rad);
        var s = Math.sin(rad);
        var mv0 = this.matrix[0], mv4 = this.matrix[4], mv8 = this.matrix[8]; 

        this.matrix[0] = c*this.matrix[0]-s*this.matrix[1];
        this.matrix[4] = c*this.matrix[4]-s*this.matrix[5];
        this.matrix[8] = c*this.matrix[8]-s*this.matrix[9];

        this.matrix[1] = c*this.matrix[1]+s*mv0;
        this.matrix[5] = c*this.matrix[5]+s*mv4;
        this.matrix[9] = c*this.matrix[9]+s*mv8;
        /* 
            this.matrix = [
                c,-s, 0, 0,
                s, c, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
            ];
        */
    }

    scale(k) {
        // TODO: implement scale
        this.matrix = [
            k, 0, 0, 0,
            0, k, 0, 0,
            0, 0, k, 0,
            0, 0, 0, 1
        ];
    }
}