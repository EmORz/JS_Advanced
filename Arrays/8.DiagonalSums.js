function solve(matrix){

    //code was get from => https://forum.tutorials7.com/1945/diagonal-sums-in-javascript-matrix
    let mainSum = 0, secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - row - 1];
    }
    console.log(mainSum + ' ' + secondarySum);
}

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])