function solve(numbers,startIndex,endIndex) {

    let sumNumbers = numbers.slice(startIndex,endIndex);

    let sum = sumNumbers.reduce((a,x) => a + Number(x), 0);

    console.log(sum);
}

solve([10,20,30,40,50,60],3,300);