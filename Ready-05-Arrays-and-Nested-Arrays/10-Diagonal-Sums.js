function diagonalSum(arr) {
    let mainDiagonal = 0;
    let secondDiagonal = 0;
    let col = 0;

    for (let row = 0; row < arr.length; row++) {
        mainDiagonal += arr[row][col];
        col += 1;
    }

    col = 0;

    for (let row = arr.length - 1; row >= 0; row--) {
        secondDiagonal += arr[row][col];
        col += 1;
    }

    console.log(`${mainDiagonal} ${secondDiagonal}`);
}

diagonalSum([
    [20, 40],
    [10, 60]]);
diagonalSum([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);