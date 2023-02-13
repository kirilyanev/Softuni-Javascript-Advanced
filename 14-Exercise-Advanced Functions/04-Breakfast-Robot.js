function solution() {
    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const meals = {
        apple: ['1 carbohydrate', '2 flavour'],
        lemonade: ['10 carbohydrate', '20 flavour'],
        burger: ['5 carbohydrate', '7 fat', '3 flavour'],
        eggs: ['5 protein', '1 fat', '1 flavour'],
        turkey: ['10 protein', '10 carbohydrate', '10 fat', '10 flavour']
    };

    function management(instructions) {
        let [command, recipeOrElement, quantity] = instructions.split(' ');

        if (command == 'restock') {
            stock[recipeOrElement] += Number(quantity);
            return 'Success';
        } else if (command == 'prepare') {
            const meal = meals[recipeOrElement];
            const cooking = meal
            .map(pr => stock[pr.split(' ')[1]] >= pr.split(' ')[0] ? 'cooking' : pr.split(' ')[1])
            .filter(e=>e!='cooking');
            // console.log(cooking);
            if(!cooking[0]) {
                return `Error: not enough ${cooking[0]} in stock`;
            }
            for (let productInfo of meal) {
                const [amount,product] = productInfo.split(' ');
                stock[product] -= Number(amount);
                
            }
            return 'Success';
        } else if (command == 'report') {

        }
        return stock;
    };

    return management;
}



let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare apple 1")); // Success
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare burger 1")); // Success
console.log(manager("report")); // protein=0 carbohydrate=4 fat=3 flavour=55
