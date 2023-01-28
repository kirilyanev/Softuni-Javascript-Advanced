function toggle() {
    let buttonElement = document.getElementsByClassName('button');
    let textElement = document.getElementById('extra');

    if (buttonElement[0].textContent === 'More') {
        buttonElement[0].textContent = 'Less';
        textElement.style = 'display:block';
    } else if (buttonElement[0].textContent === 'Less') {
        buttonElement[0].textContent = 'More';
        textElement.style = 'display:none';
    }   
}