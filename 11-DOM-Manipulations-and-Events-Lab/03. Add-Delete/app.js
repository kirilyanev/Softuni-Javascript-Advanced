function addItem() {
    let itemsElement = document.querySelector('#items');
    let inputElement = document.querySelector('#newItemText');
    
    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    inputElement.value = '';

    let deleteElement = document.createElement('a');

    deleteElement.textContent = '[Delete]';
    deleteElement.href = "#"
    //deleteElement.onclick = deleteElement;

    liElement.appendChild(deleteElement);
    itemsElement.appendChild(liElement);
    
    // function deleteElement(e) {
    //     let elementToDelete = e.target.parentNode.remove();
    // }

    deleteElement.addEventListener('click', (e)=> {
        e.currentTarget.parentNode.remove();
    })
}
