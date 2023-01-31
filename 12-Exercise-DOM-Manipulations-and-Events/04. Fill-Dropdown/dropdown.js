function addItem() {
    let inputElement = document.querySelector('#newItemText');
    let valueElement = document.querySelector('#newItemValue');
    let optionElement = document.querySelector('#menu');
    
    let newElement = document.createElement('option');
    
    newElement.textContent = inputElement.value;
    newElement.value = valueElement.value;
    optionElement.appendChild(newElement);

    inputElement.value = '';
    valueElement.value = '';
}