function sorting(arr) {
    const arrLength = arr.length;
    let result = [];

    for (let i = 0; i < arrLength; i++) {
        if (i % 2 == 0) {
            let smallest = Math.min(...arr);
            let indexOfSmallest = arr.indexOf(smallest);

            result.push(smallest);
            arr.splice(indexOfSmallest,1);
        } else {
            let biggest = Math.max(...arr);
            let indexOfBiggest = arr.indexOf(biggest);

            result.push(biggest);
            arr.splice(indexOfBiggest,1);
        }
    }

    return result;
}

console.log(sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));