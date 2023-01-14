function returnSequence(arrLength, sequenceElements) {
    let arr = [1];

    for (let i = 1; i < arrLength; i++) {
        let sum = 0;

        for (let index = i - sequenceElements; index <= i; index++) {
            currElement = arr[index];

            if(currElement) {
                sum += currElement;
            }
        }

        arr.push(sum);
    }

    return(arr);
}

console.log(returnSequence(6, 3));
console.log(returnSequence(8, 2));