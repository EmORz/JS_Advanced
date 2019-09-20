
function solve(input){
let map = new Map();

for(let i of input){
    let tokens = i.split(" : ");
    let product = tokens[0];
    let price = tokens[1];

    map.set(product, price);
}
let initialize = new Set();
Array.from(map.keys()).forEach(k => initialize.add(k[0]));

for(let ch of Array.from(initialize.keys()).sort()){
    console.log(ch);
  
    for(let product of Array.from(map.keys()).sort()){
        if(product.startsWith(ch)){
            console.log("  "+product+": "+map.get(product))
        }
    }
}
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])