function getFibonator() {
    let num = 1;
    let previous = 0;

    function fibonator() {
        let fibonacciNum = num + previous; // 1 + 0 / 1
        num = previous; // 0
        previous = fibonacciNum; // 1
        return fibonacciNum;
    }
    return fibonator;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
