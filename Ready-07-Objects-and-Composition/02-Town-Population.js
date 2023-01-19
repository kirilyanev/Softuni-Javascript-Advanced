function makeRegistry(arr) {
    let registry = {};

    arr.forEach(data => {
        [city, population] = data.split(' <-> ');
        if(registry.hasOwnProperty(city)) {
            registry[city] += Number(population);
        } else {
            registry[city] = Number(population);
        }
    });

    for (const city in registry) {
        console.log(`${city} : ${registry[city]}`);
    }
}

// makeRegistry(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000']);
makeRegistry(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])