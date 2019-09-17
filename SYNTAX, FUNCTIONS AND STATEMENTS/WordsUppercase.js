function solve(input){
    let temp = input.toUpperCase().split(/[\s,!?]+/).join(',');

    console.log(temp.toString())

}

solve("Hi, how are you?")