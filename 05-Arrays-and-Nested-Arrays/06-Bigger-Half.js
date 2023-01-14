function biggestHalf(arr) {
    const sorted = arr.sort((a, b) => Number(a) - Number(b));
    const halfArrLength = Math.round(sorted.length / 2);
    
    const result = sorted.slice(sorted.length-halfArrLength);
    return result;
}

console.log(biggestHalf([4, 7, 2, 5]));
console.log(biggestHalf([3, 19, 14, 7, 2, 19, 6]));