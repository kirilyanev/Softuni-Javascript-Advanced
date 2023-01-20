function starOrbit(arr) {
    let [rows, cols, x, y] = arr;
    let matrix = [];

    // Create the matrix
    for (let i = 0; i < rows; i++) {
        let row = [];
        row.length = cols;
        matrix.push(row);
    }

    // Add the star in the matrix
    matrix[x][y] = 1;

    // Fill other indeces of the matrix
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let [a, b] = [row, col];
            if (`${a}-${b}` === `${x}-${y}`) {
                continue;
            }
            let distanceOne = Math.abs(a - x);
            let distanceTwo = Math.abs(b - y);
            let number = Math.max(distanceOne, distanceTwo);
            matrix[row][col] = number + 1;
        }
    }
    console.log((matrix.map(row => row.join(' ')).join('\n')));
}

starOrbit([4, 4, 0, 0]);
console.log('------------');
starOrbit([5, 5, 2, 2]);
console.log('------------');
starOrbit([3, 3, 2, 2]);