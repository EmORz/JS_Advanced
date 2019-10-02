function solve(arr){

    let matrix = arr;
    let sum = matrix[0].reduce((a, b) => a+b);
    let isMagic = true;
    let sumCol =0;

    for (let index = 1; index < matrix.length; index++) {

        if (sum != matrix[index].reduce((a, b) => a+b)) {
            isMagic = false;            
        }     
    }

    for (let col = 0; col < matrix[0].length; col++) {

        for (let row = 0; row < matrix.length; row++) {
             sumCol +=matrix[row][col];           
        }        
        if (sumCol != sum) {
            isMagic =  false;
        }
        sumCol = 0;
   }
    
    console.log(isMagic)
}


function main(input){

    let sum = input[0].reduce((a, b) => a+b);

    let cols = input.reduce((acc, curr, i, matrix) => {
        if (!acc[i]) {
            acc[i] = matrix.map((x) => x[i])            
        }

        return acc;
    }, []);
    let row = [...input];

    return row.every(r => r.reduce((a,b) => a+b)===sum)
    && cols.every(c => c.reduce((a, b) => a+b)===sum);
}
console.log(main([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]))