
function main(input){

    let matrix = input.map( x => x.split(' ').map(Number));

    let sumFirstDiagonal = 0;

    for (let index = 0; index < matrix.length; index++) {

        sumFirstDiagonal+=matrix[index][index];
    }

    let sumSecondDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {

        sumSecondDiagonal+=matrix[i][matrix.length-1-i];
    }

    if (sumFirstDiagonal===sumSecondDiagonal) {
        for (let index = 0; index < matrix.length; index++) {
            
            for (let indexA = 0; indexA < matrix.length; indexA++) {
                if (index != indexA && index != matrix.length-1-indexA) {
                    matrix[index][indexA] = sumSecondDiagonal;
                }
            }
        }
        printMatrix(matrix)
    }
    else{

        printMatrix(matrix);
    }

    function printMatrix(matrix) {
        for (var i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '))
        }
    }
}

main(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1'])