function solve(string, n) {
    let arr = [];
    let indexCounter = 0;

    if(string.length % n !==0){
        let len = string.length;
        let symbolsCount =0;

        while (len % n !== 0) {
            len %=n;
            len++;
            symbolsCount++;            
        }

        for (let i = 0; i < symbolsCount; i++) {
            string += string[indexCounter];
            indexCounter++;            
        }        
    }
    for (let index = 0; index < string.length; index+=n) {
        arr.push(string.substr(index, n))        
    }

    console.log(arr.join(' '))
}

solve("RandomInput1234", 2)
solve("Test", 8)