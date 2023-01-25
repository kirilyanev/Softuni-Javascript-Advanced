function colorize() {
    const evenRowElements = document.querySelectorAll('tr:nth-child(even)');

    for (let row of evenRowElements) {
        row.style = 'background-color:Teal';
    }
}