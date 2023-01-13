function calcSum(fruit, grams, price) {
    const kilograms = grams / 1000;
    const money = price * kilograms
    console.log(`I need $${money.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}

calcSum('orange', 2500, 1.80);
calcSum('apple', 1563, 2.35);