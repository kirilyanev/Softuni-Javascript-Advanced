function solve(rows, cols) {
    let spiralMatrix = [];
    let matrixRow = [];
    let number = 1;
    let finalNumber = rows * cols;

    for (let i = 0; i < cols; i++) {
        spiralMatrix.push(matrixRow.slice());
    }

    let rowStartIndex = 0;
    let colStartIndex = 0;

    while(number <= finalNumber) {
        for (let i = colStartIndex; i < cols; i++) {
            spiralMatrix[rowStartIndex][i] = number++;
        }
        rowStartIndex++;
        for (let i = rowStartIndex; i < rows; i++) {
            spiralMatrix[i][cols - 1] = number++;
        }
        cols--;
        for (let i = cols; i > colStartIndex; i--) {
            spiralMatrix[rows - 1][i-1] = number++;
        }
        rows--;
        for (let i = rows; i > rowStartIndex; i--) {
            spiralMatrix[i-1][colStartIndex] = number++;
        }
        colStartIndex++;
    }
    
    spiralMatrix.forEach(row => {
        console.log(row.join(' '));
    });
}

solve(2,2);
console.log('-------------');
solve(4,4);
console.log('-------------');
solve(5,5);
console.log('-------------');
solve(6,6);