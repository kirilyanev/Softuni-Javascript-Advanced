function deleteByEmail() {
    let inputText = document.getElementsByTagName('input')[0].value;
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let resultElement = document.querySelector('#result');

    for (let i = 0; i < rows.length; i++) {
        let tdElements = Array.from(rows[i].querySelectorAll(':nth-child(2)'));
        tdElements.forEach(td => {
            if (td.textContent === inputText) {
                let row = td.parentNode;
                row.parentNode.removeChild(row);
                resultElement.textContent = "Deleted.";
            } else {
                resultElement.textContent = "Not found.";
            }
        });
    }
}
