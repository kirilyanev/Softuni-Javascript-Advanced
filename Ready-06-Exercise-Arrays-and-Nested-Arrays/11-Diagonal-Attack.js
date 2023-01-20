function checkDiagonals(input) {
    let matrix = input.map(row=>row.split(' '));

    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < input.length; i++) {
        firstDiagonal += Number(matrix[i][i]);
        secondDiagonal += Number(matrix[i][matrix.length - 1 - i]);
    }
    
    if (firstDiagonal !== secondDiagonal) {
        console.log((matrix.map(row=>row.join(' '))).join('\n'));
    } else {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if(j !== matrix.length - 1 - i && j !== i) {
                    matrix[i][j] = firstDiagonal;
                }
            }
        }
        console.log((matrix.map(row=>row.join(' '))).join('\n'));
    }
}

checkDiagonals(['5 3 12 3 1',
                '11 4 23 2 5',
                '101 12 3 21 10',
                '1 4 5 2 2',
                '5 22 33 11 1']);

checkDiagonals(['1 1 1',
                '1 1 1',
                '1 1 0']);