function solve(arr){

    let rotations = Number(arr.pop());
    rotations%=arr.length;


    for (let index = 0; index < rotations; index++) {
        arr.unshift(arr.pop())
    }

    console.log(arr.join(" "))
}
solve(['1', 
'2', 
'3', 
'4', 
'2'])