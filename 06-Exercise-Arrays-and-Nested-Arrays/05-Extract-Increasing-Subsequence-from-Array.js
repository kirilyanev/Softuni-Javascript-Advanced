function extractSequence(arr) {
    let result = [];
    let biggestNum = arr[0];
    const arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let currNum = arr[i];
        
        if (currNum >= biggestNum) {
            result.push(currNum);
            biggestNum = currNum;
        }
    }

    return result;
}

console.log(extractSequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));
console.log(extractSequence([20, 
    3, 
    2, 
    15,
    6, 
    1]
    ));