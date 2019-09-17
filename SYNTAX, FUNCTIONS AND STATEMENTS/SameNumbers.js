function solve(x){

    let digits = x+"";

    let test = Array.from(digits)
    let sum =0;
    const areEqual = test.every(x => x === test[0]);

    for (let index = 0; index < test.length; index++) {
        const element = Number(test[index]);
        sum+=element;        
    }
    console.log(areEqual);
    console.log(sum);
}

solve(1234)