
function sum (num1, num2){

    let min = Number(num1);
    let max = Number(num2);

    let sum = 0;

    for(let i = min; i <= max; i++){
        sum +=i;
    }

    console.log(sum);

}

sum('1', '5')