function solve() {
    let optionMenu = document.querySelector('#selectMenuTo');
    let hexadecimalOption = document.createElement('option');
    let binaryOption = document.createElement('option');
    let button = document.querySelector('button');

    button.addEventListener('click', onclick);

    binaryOption.value = "binary";
    binaryOption.textContent = 'Binary';
    hexadecimalOption.value = "hexadecimal";
    hexadecimalOption.textContent = 'Hexadecimal';

    optionMenu. appendChild(hexadecimalOption);
    optionMenu.appendChild(binaryOption);

    function onclick() {
        const input = document.querySelector('#input');
        const output = document.querySelector('#result');
        
        if (optionMenu.value === 'binary') {
            output.value = Number(input.value).toString(2);
        } else if (optionMenu.value === 'hexadecimal') {
            output.value = Number(input.value).toString(16).toUpperCase();
        }
    }
}