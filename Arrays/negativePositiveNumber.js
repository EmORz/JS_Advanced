// function solve(arr){

//     let result = [];
//     for(let num of arr){
//         if(num< 0){

//             result.unshift(num);
//         }
//         else{
//             result.push(num);
//         }
//     }
//     console.log(result.join("\n"))
// }

// solve([7, -2, 8, 9])

let specialSort = arr => {
    let result = [];

    arr.forEach(element => {element<0
        ? result.unshift(element)
        : result.push(element)
        
    });

    return result.join(' ')
}


console.log(specialSort([7, -2, 8, 9]));
console.log();
console.log(specialSort([3, -2, 0, -1]));