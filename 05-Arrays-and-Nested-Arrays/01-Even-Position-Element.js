function evenPos(arr) {
    const arrLength = arr.length;
    const evenElements = [];

    for (let i = 0; i < arrLength; i++) {
        if (i % 2 === 0) {
            evenElements.push(arr[i]);
        }
    }

    console.log(evenElements.join(' '));
}

evenPos(['20', '30', '40', '50', '60']);
