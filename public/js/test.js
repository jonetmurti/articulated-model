import {
    multiplyMat,
    transposeMat
} from './libs/matrix.js';

function test() {
    const matA = [
        2, 1, 2, 1,
        4, 4, 3, 6,
        3, 4, 5, 6,
        3, 4, 1, 3
    ];

    const matB = [
        3, 5, 4, 1,
        6, 7, 4, 3,
        8, 7, 3, 6,
        2, 4, 5, 6
    ];

    let result = multiplyMat(matA, matB);

    console.log(transposeMat(result));
}

document.getElementsByTagName('body')[0].onload = function() {
    test();
}