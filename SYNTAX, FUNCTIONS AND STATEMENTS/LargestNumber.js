function solve(num1, num2, num3){

    let temp = [];
    temp.push(num1);
    temp.push(num2);
    temp.push(num3);

    let max = temp.sort((a, b) => a-b)[temp.length-1];

    console.log(`The largest number is ${max}.`)

    
}

solve(-3, -5, -22.5)