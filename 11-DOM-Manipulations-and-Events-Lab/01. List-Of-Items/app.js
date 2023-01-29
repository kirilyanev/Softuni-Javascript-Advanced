function addItem() {
    let input = document.querySelector('#newItemText');
    let allItems = document.querySelector('#items');
    let newElement = document.createElement('li');
    newElement.textContent = input.value;

    allItems.appendChild(newElement);
}