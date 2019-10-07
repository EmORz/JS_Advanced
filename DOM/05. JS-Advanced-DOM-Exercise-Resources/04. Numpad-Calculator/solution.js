function solve() {

    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let oprators = ['+', '-', '*', '/']
    let points = '.';
    let equals = '=';
    const regex = /([0-9\.]+) ([\*\/\+\-]) ([0-9\.]+)/gm

    // <p id="expressionOutput"></p>
    // <p id="resultOutput"></p>

    let res = document.getElementById('resultOutput');
    let output = document.getElementById('expressionOutput');

    let result;

    

    document.querySelector("#calculator > div.top > button").addEventListener('click', function clear (e) {
        output.innerHTML = '';
        res.innerHTML = '';
    })

    let test = Array.from(document.querySelectorAll('#calculator > div.keys > button'))
    .map(x => x.addEventListener('click', (e)=>{
        let val = e.target.value;

        if(val === equals){
            result = calculate();
            showResult(result);
        }else{
            if(oprators.includes(val)){
                output.innerHTML += ` ${val} `;
            }else{
                output.innerHTML +=val;
            }
        }


    }));

    function calculate() {

        let m ;
        let leftNum;
        let operand;
        let rightNum;

        while ((m = regex.exec(output.innerHTML))!==null) {
        debugger

            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            m.forEach((match, index) => {
                switch (index) {
                    case 1: {leftNum = Number(match)} break;
                    case 2: {operand = match} break;
                    case 3: {rightNum = Number(match)} break;
                }
            })

        }
        let sum;
        debugger

        switch (operand) {
            case '+': {sum = leftNum + rightNum} break;
            case '-': {sum = leftNum - rightNum} break;
            case '*': {sum = leftNum * rightNum} break;
            case '/': {sum = leftNum / rightNum} break;
        }

       
        if (sum === undefined || sum === Infinity) {
            sum = NaN;
        }
        return sum;
    }
    function showResult(result) {
        res.innerHTML = result;
    }

}