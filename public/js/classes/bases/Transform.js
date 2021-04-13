import {
    multiplyMat
} from '../../libs/matrix.js';
import {
    degToRad
} from '../../libs/utils.js';

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

    translate(dist, sign = 1) {
        const mv12 = this.matrix[12], mv13 = this.matrix[13], mv14 = this.matrix[14], mv15 = this.matrix[15];
        
        this.matrix[0] += mv12*sign*dist[0]; 
        this.matrix[1] += mv13*sign*dist[0];
        this.matrix[2] += mv14*sign*dist[0];
        this.matrix[3] += mv15*sign*dist[0];
        this.matrix[4] += mv12*sign*dist[1]; 
        this.matrix[5] += mv13*sign*dist[1]; 
        this.matrix[6] += mv14*sign*dist[1]; 
        this.matrix[7] += mv15*sign*dist[1]; 
        this.matrix[8] += mv12*sign*dist[2]; 
        this.matrix[9] += mv13*sign*dist[2]; 
        this.matrix[10] += mv14*sign*dist[2]; 
        this.matrix[11] += mv15*sign*dist[2]; 
    }

    rotateX(deg) {
        // TODO: implement rotation on x axis
        const rad = degToRad(deg);

        const c = Math.cos(rad);
        const s = Math.sin(rad);
        const mv4 = this.matrix[4], mv5 = this.matrix[5], mv6 = this.matrix[6], mv7 = this.matrix[7];
        const mv8 = this.matrix[8], mv9 = this.matrix[9], mv10 = this.matrix[10], mv11 = this.matrix[11];

        this.matrix[4] = mv4*c-mv8*s;
        this.matrix[5] = mv5*c-mv9*s;
        this.matrix[6] = mv6*c-mv10*s;
        this.matrix[7] = mv7*c-mv11*s;

        this.matrix[8] = mv4*s+mv8*c;
        this.matrix[9] = mv5*s+mv9*c;
        this.matrix[10] = mv6*s+mv10*c;
        this.matrix[11] = mv7*s+mv11*c;
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

        const c = Math.cos(rad);
        const s = Math.sin(rad);
        const mv0 = this.matrix[0], mv1 = this.matrix[1], mv2 = this.matrix[2], mv3 = this.matrix[3];
        const mv8 = this.matrix[8], mv9 = this.matrix[9], mv10 = this.matrix[10], mv11 = this.matrix[11];

        this.matrix[0] = c*mv0+s*mv8;
        this.matrix[1] = c*mv1+s*mv9;
        this.matrix[2] = c*mv2+s*mv10;
        this.matrix[3] = c*mv3+s*mv11;

        this.matrix[8] = c*mv8-s*mv0;
        this.matrix[9] = c*mv9-s*mv1;
        this.matrix[10] = c*mv10-s*mv2;
        this.matrix[11] = c*mv11-s*mv3;
        /* 
            this.matrix = [
                c, 0, s, 0,
                0, 1, 0, 0,
                -s, 0, c, 0,
                0, 0, 0, 1
            ];
        */
    }

    rotateZ(deg) {
        // TODO: implement rotation on z axis
        const rad = degToRad(deg);

        const c = Math.cos(rad);
        const s = Math.sin(rad);
        const mv0 = this.matrix[0], mv1 = this.matrix[1], mv2 = this.matrix[2], mv3 = this.matrix[3];
        const mv4 = this.matrix[4], mv5 = this.matrix[5], mv6 = this.matrix[6], mv7 = this.matrix[7];

        this.matrix[0] = c*mv0-s*mv4;
        this.matrix[1] = c*mv1-s*mv5;
        this.matrix[2] = c*mv2-s*mv6;
        this.matrix[3] = c*mv3-s*mv7;

        this.matrix[4] = s*mv0+c*mv4;
        this.matrix[5] = s*mv1+c*mv5;
        this.matrix[6] = s*mv2+c*mv6;
        this.matrix[7] = s*mv3+c*mv7;
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
        transformMat = [
            k, 0, 0, 0,
            0, k, 0, 0,
            0, 0, k, 0,
            0, 0, 0, 1
        ];
        this.matrix = multiplyMat(transformMat, this.matrix);
    }

    multiply(transform) {
        this.matrix = multiplyMat(transform.matrix, this.matrix);
    }
}