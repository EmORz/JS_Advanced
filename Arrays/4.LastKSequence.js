function solve(lenght, k){

    let result = [1];

    for (let index = 1; index < lenght; index++) {
        
        let temp = k * -1;
        let test = result.slice(temp);
        let current = result.slice(temp).reduce((a, b) => a+b);

        result[index] = current;
    }

    console.log(result.join(' '))
}

solve(6, 3)