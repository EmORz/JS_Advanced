// function solve(arr){

//     let sortArr = arr.sort((a, b) => a -b);
//     let twoElements = sortArr.slice(0, 2);

//     console.log(twoElements.join(" "))
// }
// solve([30, 15, 50, 5])


let twoSmallestNumbers = arr => 
arr.sort((a, b) => a-b)
.slice(0, 2);

console.log(twoSmallestNumbers([30, 15, 50, 5]));
console.log(twoSmallestNumbers([3, 0, 10, 4, 7, 3]));