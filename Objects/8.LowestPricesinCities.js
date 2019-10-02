
function solve(input){
    let map = new Map();

    for(let line of input){
        let [town, product, price] = line.split(" | ");

        if(!map.has(product)){
            map.set(product, new Map())
        }
        map.get(product).set(town, price)
        console.log()
    }

 
    for(let[product, insideMap] of map){
        let lowerPrice = Number.POSITIVE_INFINITY;
        let townLowesrPrice = "";
        for(let[town, price] of insideMap){
            if(price<lowerPrice){
                lowerPrice=price;
                townLowesrPrice = town;
            }
        }
        console.log(`${product} -> ${lowerPrice} (${townLowesrPrice})`)
    }
}

solve(["Sofia City | Audi | 100000",
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'])