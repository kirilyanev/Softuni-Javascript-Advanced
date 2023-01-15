function sortArr(arr) {
    arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    });
    for (let element of arr) {
        console.log(element);
    }
}

sortArr(['alpha',
    'beta',
    'gamma']);
sortArr(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);
sortArr(['test',
    'Deny',
    'omen',
    'Default']);