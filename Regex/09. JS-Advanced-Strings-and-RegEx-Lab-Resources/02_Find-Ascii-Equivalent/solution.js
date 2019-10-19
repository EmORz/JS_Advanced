function solve() {

  let input = document.getElementById("text").value;
  let result = document.getElementById("result");
  debugger
  let tokens = input.split(" ");

  let getString = "";

  let message = "";
  let charResult = [];
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
        let numMsq = document.createElement('p');
        numMsq.innerHTML = getString.trim();
         result.appendChild(numMsq);
          getString = '';
      }      
  }

  let msq = document.createElement('p');
  msq.innerHTML = message;
  result.appendChild(msq)


}
