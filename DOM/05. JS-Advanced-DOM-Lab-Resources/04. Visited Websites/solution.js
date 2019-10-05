
const template = x => `visited ${x} times!`;

let linkss = {
  "Google": 2,
  "SoftUni": 1,
  "YouTube": 4,
  "WikiPedia": 4,
  "Gmail": 7,
  "StackOverflow": 6
}  

function solve() {


}

document.addEventListener("click",  (e) => {

  if(e.target.nodeName === "A"){
    e.target
    .nextElemetSibling
    .innerHTML = template(linkss[e.target.textContent.trim()]++)
  }
  
})