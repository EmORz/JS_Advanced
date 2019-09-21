function solve(input){

    let map = new Map();

    for(let line of input){
        let tokens = line.split(" <-> ");

        let towns = tokens[0];
        let population = Number(tokens[1]);

        if(!map.has(towns)){
            map.set(towns, 0);
        }

        map.set(towns, map.get(towns)+population);
    }

    for(let data of map){
        console.log(data[0]+" : "+data[1])
    }
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])