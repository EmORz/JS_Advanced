
function solution() {
    let currentTxt = '';

    function append(string) {
        currentTxt +=string;
    }

    function removeStart(n) {
        currentTxt = currentTxt.substring(n)
    }

    function removeEnd(n) {
        currentTxt = currentTxt.substring(0, currentTxt.length -n)
    }

    function print() {
        console.log(currentTxt);
    }

    return{
        append,
        removeStart,
        removeEnd,
        print
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
