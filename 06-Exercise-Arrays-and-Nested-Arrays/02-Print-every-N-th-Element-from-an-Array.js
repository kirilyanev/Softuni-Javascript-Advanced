function printNth(arr, number) {
    const arrLength = arr.length;
    const result = [];

    for (let i = 0; i < arrLength; i+=number) {
        result.push(arr[i]); 
    }

    return result
}

console.log(printNth(['5', 
'20', 
'31', 
'4', 
'20'], 
2));