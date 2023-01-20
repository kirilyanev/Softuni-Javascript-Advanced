// Solution with 83/100 in judge

// function isMatrixMagic(arr) {
//     const rows = arr.length;
//     const cols = arr[0].length;
//     let sumRow = 0;
//     let sumCol = 0;
//     let result = [];

//     for (let row = 0; row < rows; row++) {
//         sumRow = 0;
//         sumCol = 0;
//         for (let col = 0; col < cols; col++) {
//             sumRow += arr[row][col];
//             sumCol += arr[col][row];
//         }
//         result.push(sumRow);
//         result.push(sumCol);
//     }

//     // const isMagic = result.filter(n => n !== result[0]).length ? false: true;
//     // console.log(isMagic);
//     const isMagic = result.every(x=>x === result[0]);
//     console.log(isMagic);
// }

// isMatrixMagic([[4, 5, 6],
// [6, 5, 4],
// [5, 5, 5]]);
// isMatrixMagic([[11, 32, 45],
// [21, 0, 1],
// [21, 1, 1]]);
// isMatrixMagic([[1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]);

// Solution with 100/100 in judge
function isMatrixMagic(input) {
    let rowSum = [];
    let colSum = [];
    let isMagical = true;

    for (let i = 0; i < input.length; i++) {
        let currentRowSum = 0;
        let currentColSum = 0;
        for (let j = 0; j < input[i].length; j++) {
            currentRowSum += Number(input[i][j]);
        }
        rowSum.push(currentRowSum);

        for (let column = 0; column < input.length; column++) {
            currentColSum += Number(input[column][i]);
        }
        colSum.push(currentColSum);
    }

    for (let number of rowSum) {
        if (number !== rowSum[0]) {
            isMagical = false;
            break;
        }
    }
    
    if (rowSum.join() === colSum.join() && isMagical) {
        console.log('true');
    } else {
        console.log('false');
    }
}

isMatrixMagic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
isMatrixMagic([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);
isMatrixMagic([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);