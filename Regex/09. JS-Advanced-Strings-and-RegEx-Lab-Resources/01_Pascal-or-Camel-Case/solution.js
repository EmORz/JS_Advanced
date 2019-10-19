
function solve() {
//debugger

let input = document.getElementById('text').value;
let currentCase = document.getElementById('naming-convention').value;
  let split = input.toLowerCase().split(' ').filter(a => a !== "");
 // debugger

  let output = '';

  if(currentCase === "Pascal Case"){
      stringEngine();

  } else if(currentCase === "Camel Case"){
     stringEngine();
      output = output.replace(output[0], output[0].toLowerCase())
  } else{
      output = 'Error!';
  }
 // debugger
  document.getElementById("result").innerHTML = output;
 

  function stringEngine() {
      for (let word of split) {
          if (word[0] !== word[0].toUpperCase()) {
              word = word.replace(word[0], word[0].toUpperCase());
          }
          output += word;
      }
  }
}




