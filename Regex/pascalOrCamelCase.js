
function solve(input, currentCase ) {
    let split = input.toLowerCase().split(' ');

    let output = '';

    if(currentCase === "Pascal Case"){
        stringEngine();

    } else if(currentCase === "Camel Case"){
       stringEngine();
        output = output.replace(output[0], output[0].toLowerCase())
    } else{
        output = 'Error!';
    }
    return output;

    function stringEngine() {
        for (let word of split) {
            if (word[0] !== word[0].toUpperCase()) {
                word = word.replace(word[0], word[0].toUpperCase());
            }
            output += word;
        }
    }
}

console.log(solve("secOND eXamPLE", "Pascal Case"))
console.log(solve("Invalid Input", "Another Case"))
console.log(solve("this is an example", "Camel Case"))