function storeCatalogue(products) {
    let catalogue = {};

    // Create initial catalogue
    for (let product of products) {
        if(!catalogue.hasOwnProperty(product[0])) {
            catalogue[product[0]] = [];
        }
        catalogue[product[0]].push(product);
    }

    // Sort products inside each letter in alphabetical order
    for (const key in catalogue) {
        catalogue[key] = catalogue[key].sort((a,b)=> a.localeCompare(b));
    };
    
    // Sort letters in alphabetical order
    let catalogueEntries = Object.entries(catalogue)
    let sortedCatalogue = catalogueEntries.sort((a,b)=> a[0][0].localeCompare(b[0][0]));
    
    // Print final result on console
    for (let line of sortedCatalogue) {
        console.log(line[0]);
        line[1].forEach(element => {
            let [productName,productPrice] = element.split(' : ');
            console.log(`  ${productName}: ${productPrice}`);
        });
    }
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);

console.log('--------------');

storeCatalogue(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
);