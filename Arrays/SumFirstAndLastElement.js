
// function solve(arr){

//     let a = arr[0];
//     let b = arr[arr.length -1];

//     let summ = Number(a) +Number(b);

//     console.log(summ);
// }

let sum = arr => Number(arr.shift())+Number(arr.pop());
console.log(sum(['5', '2']))