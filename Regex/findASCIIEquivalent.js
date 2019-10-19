function solve(input) {
    let tokens = input.split(" ");

    let getString = "";

    let message = "";
    for(let part of tokens){
        let toNum = Number(part);

        if(toNum){
            message += String.fromCharCode(toNum);
        }else{
            part.split('').forEach(function (c) {
                getString += c.charCodeAt(0)+" ";
              });           
        }
        if(getString !==''){
            console.log(getString.trim());
            getString = '';
        }
        
    }
    console.log(message);

    return "";
}

console.log(solve("83 111 John Adams 102 116 85 Roger 110 105"))