function solve() {
    debugger
    let string = document.getElementById('text').value;
    let n = +document.getElementById('number').value;
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

    document.getElementById('result').innerHTML = arr.join(' ');
}