function solve(arr){


    console.log("Sum = "+arr.reduce((a,b)=> a+b))
    console.log("Min = "+Math.min(...arr))
    console.log("Max = "+Math.max(...arr))
    console.log("Product = "+arr.reduce((a, b)=> a*b))
    console.log("Join = "+arr.join(""))
}

solve([5, -3, 20, 7, 0.5])