function solve(arr){

    let rotations =+arr.pop();
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

function main(arr){

    let rotations =+arr.pop() % arr.length;


    return arr.reduceRight((acc, curr) => {

        if (rotations) {            
            acc = [curr, ...acc.slice(0, arr.length-1)];
            rotations--;
        }

        return acc;
    }, [...arr]).join(" ")


    
}
console.log(main(['1', 
'2', 
'3', 
'4', 
'2']))