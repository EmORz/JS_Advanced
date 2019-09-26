// function solve(arr){

//     let biggestNum = -Number.MAX_SAFE_INTEGER;
//     for (let index = 0; index < arr.length; index++) {
    
//         for(let num of arr[index]){
//             if(num>biggestNum){
//                 biggestNum = num;
//             }
//         }
        
//     }
//     console.log(biggestNum);

// }
// solve([[3, 5, 7, 12],
//     [-1, 4, 33, 2],
//     [8, 3, 0, 4]])

let biggestElement = matrix => Math.max.apply( ...matrix);

console.log(biggestElement(
    [[20, 50, 10],
     [8, 33, 145]]
    ));

console.log(biggestElement(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));