
function solve(input){

    let towns = [];
    let regex = /\s*\|\s*/;

    for(let line of input.slice(1)){

        let tokens = line.split(regex);
        let townObj = {Town: tokens[1], Latitude: Number(Number(tokens[2]).toFixed(2)), Longitude: Number(Number(tokens[3]).toFixed(2))};

        towns.push(townObj);

    }
    console.log(JSON.stringify(towns));

}

solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.60 |',
'| Monatevideo | 34.50 | 56.11 |'])

// let test1 = ['| Town | Latitude | Longitude |',
// '| Sofia | 42.696552 | 23.32601 |',
// '| Beijing | 39.913818 | 116.363625 |'];