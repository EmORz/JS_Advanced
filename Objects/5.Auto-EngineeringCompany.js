
function solve(input){

    let cars = new Map();

    for(let line of input){
        let tokens = line.split(" | ");
        let brand = tokens[0];
        let model = tokens[1];
        let quantity = Number(tokens[2]);

        if(!cars.get(brand)){
            cars.set(brand, new Map());
        }
        if(!cars.get(brand).get(model)){
            cars.get(brand).set(model, 0);
        }

        cars.get(brand).set(model, cars.get(brand).get(model)+quantity)
    }

    for(let [brand, modelCount] of cars){
        console.log(brand);

        for(let [model, quantity] of modelCount){
            console.log("###"+model +" -> "+quantity)
        }
    }
}
solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])