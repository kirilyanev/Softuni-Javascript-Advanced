function printArr(arr, delimiter) {
    console.log(arr.join(`${delimiter}`));
}

printArr(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-');
printArr(
    ['How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!'],
    '_'
);