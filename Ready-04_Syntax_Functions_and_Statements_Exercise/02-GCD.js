function findDivisor(num1, num2) {
    let remainder = num1 % num2;

    if (remainder === 0) {
        console.log(num2);
    }

    while (remainder !== 0) {
        let numOne = num2;
        let numTwo = remainder;
        remainder = numOne % numTwo;

        if (remainder === 0) {
            console.log(numTwo);
        }
    }
}

findDivisor(15, 5);
findDivisor(2154, 458);