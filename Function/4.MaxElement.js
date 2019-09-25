function solve(arr){

    let maxElement = arr.sort((a, b) => b-a);

    console.log(maxElement[0])
}

solve([1, 44, 123, 33])