function rotateArr(arr, rotations) {
    result = arr;

    for (let i = 0; i < rotations; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    console.log(result.join(' '));
}

rotateArr(['1', 
'2', 
'3', 
'4'], 
2);
rotateArr(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);