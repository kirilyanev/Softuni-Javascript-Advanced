function printStars(size) {
    if (!size) {
        size = 5;
    }

    let row = '';

    for (let index = 0; index < Number(size); index++) {
        row += '* ';
    }

    for (let i = 0; i < Number(size); i++) {
        console.log(row);   
    }
}

printStars();