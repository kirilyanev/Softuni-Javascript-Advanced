function addItem() {
    let itemsElement = document.querySelector('#items');
    let inputElement = document.querySelector('#newItemText');
    
    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    inputElement.value = '';

    let deleteElement = document.createElement('a');

    deleteElement.textContent = '[Delete]';
    deleteElement.href = "#"

    liElement.appendChild(deleteElement);
    itemsElement.appendChild(liElement);

    deleteElement.addEventListener('click', (e)=> {
        e.currentTarget.parentNode.remove();
    })
}
