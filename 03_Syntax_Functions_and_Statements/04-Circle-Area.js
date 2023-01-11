function solve(input) {
    if (typeof input === 'number') {
        let radius = input;
        let result = Math.pow(radius, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}

solve(5);
solve('name')