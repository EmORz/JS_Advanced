function solve(arr){

    let matrix = arr;
    let counter = 0;

    for (let row = 0; row < matrix.length; row++) {
        
        for (let col = 0; col < matrix[row].length; col++) {

            if (matrix[row][col] == matrix[row][col+1] ) {
                counter++;
            }

            if (row > 0) {
                
                if (matrix[row][col]==matrix[row-1][col]) {
                    counter++;
                    
                }
            }
        }

    }

    console.log(counter)
}
solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']])