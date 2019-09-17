function solve(fruit, weight, price){

    let money = weight / 1000 *price;
    var temp = `I need $${money.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`;
    console.log( temp);
    
}
solve('orange', 2500, 1.8)