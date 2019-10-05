function solve() {

    const selectMenuTo = document.getElementById('selectMenuTo');
  

    document.querySelector("#container > button").addEventListener('click', convert);

    function convert() {
       let num = Number(document.getElementById('input').value);

       let result;
       console.log(selectMenuTo.value);
       if (selectMenuTo.value === 'binary') {
           result = decimalToBinary(num);
       }else if (selectMenuTo.value === 'hexadecimal') {
        result = decimalToHexadecimal(num);
    }

    appendResult(result);

    }

    function appendResult(result) {
        document.getElementById('result').value = result;
    }

    function decimalToBinary(num) {

        return (num >>> 0).toString(2);
    }
    function decimalToHexadecimal(num) {

        return num.toString(16).toUpperCase();
    }

    function createSelectMenuOptions() {
        let binaryOption = document.createElement('option');

        binaryOption.textContent = 'Binary';
        binaryOption.value = 'binary';

        let Hexadecimal = document.createElement('option');

        Hexadecimal.textContent = 'Hexadecimal';
        Hexadecimal.value = 'hexadecimal';

        selectMenuTo.appendChild(binaryOption);

        selectMenuTo.appendChild(Hexadecimal);
    }
    createSelectMenuOptions()
}