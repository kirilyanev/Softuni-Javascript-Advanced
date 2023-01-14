function findMatches(arr) {
    const rows = arr.length;
    const columns = arr[0].length;
    let matches = 0;

    for (let row = 0; row < rows; row++) {
        
        for (let col = 0; col < columns - 1; col++) {
            let currEl = arr[row][col];
            let nextEl = arr[row][col+1];

            if (currEl === nextEl) {
                matches += 1;
        }
            
        }
    }

    for (let col2 = 0; col2 < columns; col2++) {
        for (let row2 = 0; row2 < rows - 1; row2++) {
            let currEl2 = arr[row2][col2];
            let nextEl2 = arr[row2 + 1][col2];
            
            if (currEl2 === nextEl2) {
                matches += 1;
            }
        }
    }

    return matches;
}

console.log(findMatches([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));
console.log(findMatches([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]));