// TODO: Implement matrix calculations
export function multiplyMat(matA, matB) {
    /*
        Precondition(s): A and B are 4 dimension matrices
    */
    let result = [];
    let sum;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            sum = 0;
            for (let k = 0; k < 4; k++) {
                sum += matA[4*i + k] * matB[j + 4*k];     
            }
            result.push(sum);
        }
    }
    return result;
}

export function transposeMat(mat) {
    /*
        Precondition(s): mat is a 4 dimension matrix
    */
    let result = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            result.push(mat[i + 4*j]);
        }
    }
    return result;
}