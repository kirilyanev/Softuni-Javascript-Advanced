function findBiggest(arr) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    const arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        const nestedArr = arr[i];
        const nestedArrLength = nestedArr.length;

        for (let j = 0; j < nestedArrLength; j++) {
            if (nestedArr[j] > biggestNum) {
                biggestNum = nestedArr[j];
            }
        }
    }

    return biggestNum;
}

console.log(findBiggest([[20, 50, 10], [8, 33, 145]]));
console.log(findBiggest([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));