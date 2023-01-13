function solve(number) {
    const arr = String(number).split('').map(n => Number(n));
    const digitSum = arr.reduce((acc,n)=> acc + n);
    const isSame = arr.filter(n => n !== arr[0]).length ? false: true;
    
    if (isSame) {
        console.log('true');
        console.log(digitSum);
    } else {
        console.log('false');
        console.log(digitSum);
    }
}

solve(2222222);
solve(1234)
