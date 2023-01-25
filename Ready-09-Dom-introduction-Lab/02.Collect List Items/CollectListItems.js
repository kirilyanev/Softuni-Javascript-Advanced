function extractText() {
    let ulElement = document.getElementById('items');
    let buttonElement = document.getElementById('result');
    buttonElement.textContent = ulElement.textContent;
}