function composeObj(arr) {
    const arrLength = arr.length;
    let object = {};

    for (let i = 0; i < arrLength; i+=2) {
        let product = arr[i];
        let calories = Number(arr[i+1]);
        object[product] = calories;
    }
    console.log(object);
}

composeObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);