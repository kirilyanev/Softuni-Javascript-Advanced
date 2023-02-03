function calculate(arr) {
    let numbers = [];
    let operators = {
        '+': (a, b) => { return b + a },
        '-': (a, b) => { return b - a },
        '*': (a, b) => { return b * a },
        '/': (a, b) => { return b / a },
    }

    for (const element of arr) {
        if (typeof element === 'number') {
            numbers.push(element);
        } else {
            let a = numbers.pop();
            let b = numbers.pop();
            if (b === undefined) {
                return console.log('Error: not enough operands!');
            }
            let result = operators[element](a, b);
            numbers.push(result);
        }
    }
    if (numbers.length > 1) {
        return console.log('Error: too many operands!');
    }
    console.log(numbers[0]);
}

calculate([3, 4, '+']);
calculate([5, 3, 4, '*', '-']);
calculate([2, 3, '+', '+', '+'])
calculate([3, 4, 5, 6, '+'])