function checkDiagonals(input) {
    let equalMatrix = input.slice().map(row => row.split(' ').map(el => el = false));
    let matrix = input.map(row => row.split(' '));

    let diagonalOne = 0;
    let diagonalTwo = 0;
    // set diagonal two column start index
    let colTwo = matrix[0].length - 1;

    // Check if diagonals are equal
    for (let i = 0; i < matrix.length; i++) {
        let rowOne = i;
        let colOne = i;
        let rowTwo = i;

        diagonalOne += Number(matrix[rowOne][colOne]);
        diagonalTwo += Number(matrix[rowTwo][colTwo]);

        equalMatrix[rowOne][colOne] = matrix[rowOne][colOne];
        equalMatrix[rowTwo][colTwo] = matrix[rowTwo][colTwo];
        colTwo--;
    }

    //if not equal
    if (diagonalOne !== diagonalTwo) return console.log((matrix.map(row => row.join(' '))).join('\n'));

    equalMatrix = equalMatrix.map(row => row.map(el => {
        if (el == false) {
            return diagonalOne;
        }
        return el;
    }));

    console.log((equalMatrix.map(row => row.join(' '))).join('\n'));
}

checkDiagonals([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);

// checkDiagonals(['1 1 1',
//     '1 1 1',
//     '1 1 0']);
console.log('-----------------');
checkDiagonals([
    '5 3 12 3 1',
    '15 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);