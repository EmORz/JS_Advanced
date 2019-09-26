
// function solve(arr){

//     let getOdds = arr.filter((num, index) => index % 2 == 1 );
//     let doubleOddsResult = getOdds.map(a => a * 2);
//     let reverse = doubleOddsResult.reverse();

//     console.log(reverse.join(" "))
// }

// solve([3, 0, 10, 4, 7, 3])

let doubledOddPositions = arr =>   
 arr.filter((num, index) => index % 2 !== 0)
.map(x => x *2)
.reverse();


console.log(doubledOddPositions([10, 15, 20, 25]));
console.log(doubledOddPositions([3, 0, 10, 4, 7, 3]));