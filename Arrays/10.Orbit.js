
function main(input){

    let [width, height, x, y] = input;
    let matrix = [];

    for (let index = 0; index < height; index++) {

        matrix.push(Array(width).fill());
    }

    matrix.map((row, ri) => row.map((el, i)=> matrix[ri][i] = Math.max(Math.abs(ri - x), Math.abs(i-y))+1));
    //console.log(matrix.map( e => e.join(' ')).join('\n'));
    matrix.forEach( e => console.log(e.join(' ')));
}

main([4, 4, 0, 0])