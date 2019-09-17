function solve(input){
    let myJson = JSON.stringify(input);

    let obj = {};
    for (let index = 0; index < input.length; index++) {
        const temp = input[index];
        const value = input[index+1];

        if(index % 2 == 0){
            obj[temp]= Number(value);
        }
        
    }
    console.log(obj);

}

solve(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42])