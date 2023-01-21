function lowestPrice(input) {
    let result = {};

    for (let line of input) {
        let [town,product,price] = line.split(' | ');

        if (!result.hasOwnProperty(product)) {
            result[product] = [Number(price),town];
        }

        if (result[product][0] > Number(price)) {
            result[product][0] = Number(price);
            result[product][1] = town;
        }
    }
    
    for (const product in result) {
        console.log(`${product} -> ${result[product][0]} (${result[product][1]})`);
    }
}

lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);