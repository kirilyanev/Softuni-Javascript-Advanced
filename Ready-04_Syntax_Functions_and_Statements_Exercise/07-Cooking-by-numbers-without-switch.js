function solve(...parameters) {
    let number = Number(parameters.shift());

    const operations = {
        chop(){number = number / 2},
        dice(){number = Math.sqrt(number)},
        spice(){number +=1},
        bake(){number = number*3},
        fillet(){number -= number* 0.2},
    }

    while(parameters.length > 0) {
        let command = parameters.shift();
        operations[command]();
        console.log(number);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('-----------');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');