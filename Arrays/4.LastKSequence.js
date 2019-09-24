function solve(arr){

    arr = arr.map(Number);
    let count = arr.shift();

    console.log(arr.slice(arr.length - count, arr.length).join(" "))
}

solve([6, 3])