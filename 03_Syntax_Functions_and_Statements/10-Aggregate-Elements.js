function solve(arr) {
    const sumElements = arr.reduce((acc,n) => acc + n,0);
    const sumInverse = arr.reduce((acc,n) => acc + 1/n,0);
    const concatElements = arr.map(a => a.toString());

    console.log(sumElements);
    console.log(sumInverse);
    console.log(concatElements.join(''));
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);