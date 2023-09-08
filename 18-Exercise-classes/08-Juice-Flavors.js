function JuiceBottles(juicesArr) {
    const store = {};
    const output = new Map();

    for (let row of juicesArr) {
        const [juice, quantity] = row.split(' => ');
        if (!store[juice]) {
            store[juice] = 0;
        }
        store[juice] += Number(quantity);
        if (store[juice] >= 1000) {
            output.set(juice, store[juice] / 1000);
        }
    }

    output.forEach((quantity, juice) => console.log(`${juice} => ${Math.floor(quantity)}`))
}

JuiceBottles(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

console.log('------------');

JuiceBottles(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);