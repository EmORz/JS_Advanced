function solve() {
 

  let input = document.getElementById('input');
  let output = document.getElementById('output');

  if (input === null || output === null) {
    throw new Error('...........')
  }

  input.innerHTML
       .split('.')
       .forEach(x => {
         let p = document.createElement('p')
         p.innerHTML = x + ".";
         output.appendChild(p);
  })
}