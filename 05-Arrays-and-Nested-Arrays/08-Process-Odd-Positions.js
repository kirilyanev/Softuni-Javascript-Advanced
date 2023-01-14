function processOdd(arr) {
    const arrLength = arr.length;
    const result = [];

    for (let index = 0; index < arrLength; index++) {
        if(index % 2 != 0) {
            result.push((Number(arr[index]) * 2));
        }
    }
    return result.reverse().join(' ');
}

console.log(processOdd([10, 15, 20, 25]));
console.log(processOdd([3, 0, 10, 4, 7, 3]));