function positiveNegative(arr) {
    let result = [];

    arr.forEach(element => {
        if(element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    });

    result.forEach(element => {
        console.log(element);
    });
}

positiveNegative([7, -2, 8, 9]);
positiveNegative([3, -2, 0, -1]);