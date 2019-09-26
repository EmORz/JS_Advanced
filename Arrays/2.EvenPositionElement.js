
// function solve(arr){

//     let arrEven = [];
//     for (let index = 0; index < arr.length; index++) {
        
//         if (index % 2 == 0) {
//             arrEven.push(arr[index]);
//         }
        
//     }

//     console.log(arrEven.join(" "))
    
// }

// solve(['5', '10'])
let filterArray = arr => arr.filter((e, i) => i % 2 === 0).join(' ')
console.log(filterArray(['20', '30', '40']));
console.log();
console.log(filterArray(['5', '10']));