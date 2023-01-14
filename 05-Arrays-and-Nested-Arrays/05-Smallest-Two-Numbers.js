function smallestTwo(arr) {
    result = arr.sort((a,b)=>Number(a)-Number(b));
    console.log(`${result[0]}\n${result[1]}`)
}

smallestTwo([30, 15, 50, 5]);
smallestTwo([3, 0, 10, 4, 7, 3]);