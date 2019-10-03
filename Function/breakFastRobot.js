let robot = (
    function name() {
        
        let ingredients = {
            //protein, carbohydrates, fat and flavours
            protein: {
                name: 'protein',
                quantity: 0
            },
            carbohydrates: {
                name: 'carbohydrates',
                quantity: 0
            },
            fat: {
                name: 'fat',
                quantity: 0
            },    
            flavour: {
                name: 'flavour',
                quantity: 0
            },
        }

        let mealCooking = {
            apple: (quantity) => useRequiredIngredients([
                {element: ingredients.carbohydrates, amount: quantity},
                {element: ingredients.flavour, amount: quantity*2}
            ]),
            lemonade: (quantity) => useRequiredIngredients([
                {element: ingredients.carbohydrates, amount: quantity*10},
                {element: ingredients.flavour, amount: quantity*20}
            ]),
            burger: (quantity) => useRequiredIngredients([
                {element: ingredients.carbohydrates, amount: quantity*5},
                {element: ingredients.flavour, amount: quantity*3},
                {element: ingredients.fat, amount: quantity*7}
            ]),
            burger: (quantity) => useRequiredIngredients([
                {element: ingredients.carbohydrates, amount: quantity*5},
                {element: ingredients.flavour, amount: quantity*3},
                {element: ingredients.fat, amount: quantity*7}
            ]),
            eggs: (quantity) => useRequiredIngredients([
                {element: ingredients.protein, amount: quantity*5},
                {element: ingredients.flavour, amount: quantity*1},
                {element: ingredients.fat, amount: quantity*1}
            ]),
            turkey: (quantity) => useRequiredIngredients([
                {element: ingredients.protein, amount: quantity*10},
                {element: ingredients.flavour, amount: quantity*10},
                {element: ingredients.fat, amount: quantity*10},
                {element: ingredients.carbohydrates, amount: quantity*10}
            ])
        }

        function useRequiredIngredients(requiredIngredients) {
            
            for (let i = 0; i < requiredIngredients.length; i++) {
                
                let element = requiredIngredients[i].element.quantity;
                let amount = requiredIngredients[i].amount;

                if (element< amount) {
                    returnTakenElements(i);

                    return `Error: not enough ${requiredIngredients[i].element.name} in stock`;                    
                }
                element-=amount;

            }
            return 'Success';

            function returnTakenElements(indexOfMissingElement) {
                for (let i = indexOfMissingElement - 1; i >= 0; i--) {
                    requiredIngredients[i].element.quantity += requiredIngredients[i].amount;
                }
            }
        }

        let commands = {
            
            restock: (microelement, quantity) => {
                ingredients[microelement].quantity += Number(quantity);
                return "Success"
            },
            prepare: (recipe, quantity) => {
                let meal = mealCooking[recipe.toLowerCase()];

                if (meal) {
                    return meal(Number(quantity));
                }
                return `Error: recipe for ${recipe} does not exists!`;
            },

            report: () => Object.keys(ingredients)
            .map(n => `${n}=${ingredients[n].quantity}`)
            .join(' ')

        }

        return function (command) {
            if (command === undefined) {
                return;
            }

            let tokens = command.split(' ');
            let cmd = commands[tokens[0]];

            if (cmd) {
                return cmd(tokens[1], tokens[2])
            }
            return 'Error: Command does not exists!';

        }
    }
)();



console.log('Test 1');
console.log(robot("prepare apple 1"))