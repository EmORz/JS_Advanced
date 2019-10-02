
function main(input){

    let commands = {
        counter: 1,
        add: (arr, num) => [...arr, num],
        remove: (arr) => [...arr.slice(0, arr.length-1)] 
    };

    let result = input.reduce((acc, curr) => {
        acc = commands[curr](acc, commands.counter);
        commands.counter++;
        return acc;

    }, []);

    return result.length === 0? "Empty": result.join("\n");
}


function solve(arr){

    let result = [];
    let number =1;

    for(let command of arr){
        if(command == 'add'){
            result.push(number);
        }
        else{
            result.pop();

        }
        number++;
    }

    if (result.length ==0) {
        console.log('Empty');        
    }
    else{
        result.forEach(x => console.log(x));
    }
}
console.log(main(['add', 
'add', 
'add', 
'add']))