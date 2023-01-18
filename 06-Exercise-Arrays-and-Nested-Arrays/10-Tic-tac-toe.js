function solve(moves) {
    let field = [
        [false, false, false],
        [false, false, false],
        [false, false, false]];

    //let turns = moves.length;
    let winner = false;
    let isPlayerX = true;
    let turnCount = 0;

    let firstDiagonalWin = `${field[0][0]}-${field[1][1]}-${field[2][2]}`;
    let secondDiagonalWin = `${field[0][2]}-${field[1][1]}-${field[2][0]}`;

    function playerWin(field, player) {
        for (let row = 0; row < 3; row++) {
            let rowWin = 0;
            let colWin = 0;

            for (let col = 0; col < 3; col++) {
                if (field[row][col] === player) {
                    rowWin++;
                }
                if (field[col][row] === player) {
                    colWin++;
                }
            }
            if (rowWin === 3 || colWin === 3) {
                return true;
            }
        }
        return false;
    }


    //for (let i = 0; i <= turns; i++) {
    while (moves.length > 0){
        let [row, col] = moves.shift().split(' ').map(n => Number(n));


        // if (field[row][col] && i !== turns - 1) {
        if(field[row][col] && turnCount !== 9) {
            console.log('This place is already taken. Please choose another!');
            // i++;
            continue;
        }

        //if (i % 2 === 0) {
        if(isPlayerX) {
            field[row][col] = 'X';
            turnCount++;
            firstDiagonalWin = `${field[0][0]}-${field[1][1]}-${field[2][2]}`;
            secondDiagonalWin = `${field[0][2]}-${field[1][1]}-${field[2][0]}`;

            if (firstDiagonalWin === 'X-X-X' || secondDiagonalWin === 'X-X-X') {
                console.log('Player X wins!');
                winner = true;
                break;
            }

            if (playerWin(field, 'X')) {
                console.log('Player X wins!');
                winner = true;
                break;
            }
        //} else if (i % 2 !== 0) {
        } else if(!isPlayerX) {
            field[row][col] = 'O';
            turnCount++;
            firstDiagonalWin = `${field[0][0]}-${field[1][1]}-${field[2][2]}`;
            secondDiagonalWin = `${field[0][2]}-${field[1][1]}-${field[2][0]}`;

            if (firstDiagonalWin === 'O-O-O' || secondDiagonalWin === 'O-O-O') {
                console.log('Player O wins!');
                winner = true;
                break;
            }
            if (playerWin(field, 'O')) {
                console.log('Player O wins!');
                winner = true;
                break;
            }
        }
        isPlayerX = !isPlayerX;
    }

    if (!winner) {
        console.log('The game ended! Nobody wins :(');
    }
    for (const row of field) {
        console.log(row.join('\t'));
    }
}

solve(['0 0',
    '0 0',
    '1 1',
    '0 1',
    '1 2',
    '0 2',
    '2 2',
    '1 2',
    '2 2',
    '2 1'])


// solve(['0 1',
//     '0 0',
//     '0 2',
//     '2 0',
//     '1 0',
//     '1 2',
//     '1 1',
//     '2 1',
//     '2 2',
//     '0 0'])
// solve(['2 2',
// '1 2',
// '1 1',
// '1 0',
// '1 0',
// '2 0',
// '2 1',
// '0 1',
// '0 2',
// '0 0',
// ])

// solve(["0 1",
//     "0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 1",
//     "1 2",
//     "2 2",
//     "2 1",
//     "0 0"]);
// console.log('--------');
// solve(["0 0",
//     "0 0",
//     "1 1",
//     "0 1",
//     "1 2",
//     "0 2",
//     "2 2",
//     "1 2",
//     "2 2",
//     "2 1"]);
// console.log('--------');
// solve(["0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 2",
//     "1 1",
//     "2 1",
//     "2 2",
//     "0 0"]);
// console.log('--------');
// solve(["0 0",
//     "1 2",
//     "1 0",
//     "0 2",
//     "2 0",
//     "1 2",
//     "1 1",
//     "2 1",
//     "2 2",
//     "0 0"]);
// console.log('-----------');
// solve(["0 2", //x
//     "0 1", //o
//     "1 1", //x
//     "2 1", //o
//     "1 1", //x
//     "2 0", //x
//     "1 2", //o
//     "1 1", //x
//     "2 1", //o
//     "2 2", //x
//     "0 0"]) //o