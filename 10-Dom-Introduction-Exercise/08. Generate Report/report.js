function generateReport() {
    const checkboxElements = Array.from(document.querySelectorAll('th input'));
    const rowElements = Array.from(document.querySelectorAll('tbody tr'));
    const outputElement = document.getElementById('output');
    let output = [];

    for (let row = 0; row < rowElements.length; row++) {
        let col = 0;
        let object = {};

        for (let checkbox of checkboxElements) {
            if (checkbox.checked) {
                let currTd = document.querySelectorAll(`tbody tr :nth-child(${col + 1})`);
                object[checkbox.name] = currTd[row].textContent;
            }
            col++;
        }
        output.push(object);
    }
    outputElement.value = JSON.stringify(output, null, 2);
}


// Working solution from WillyStyle in softuni forums:
// function generateReport() {
//     let checkboxes = document.querySelectorAll('table thead tr th input');
//     let rows = document.querySelectorAll('tbody tr');
//     let output = [];
//     for(let i = 0;i < rows.length;i++) {
//         let obj = {};
//         let values = Array.from(rows[i].getElementsByTagName('td')).map(el=>el.textContent);
//         for (let j = 0; j < checkboxes.length; j++) {
//             if (checkboxes[j].checked) {
//                 obj[checkboxes[j]] = values[j];
//             }
//         }
//         output.push(obj);
//     }
//     document.querySelector('#output').value = JSON.stringify(output, null, 2)
// }



// Some of my other attempts to solve this problem :)

// function generateReport() {
//     const checkboxElements = Array.from(document.querySelectorAll('th input'));
//     const headerElements = Array.from(document.querySelectorAll('thead tr th'));
//     const rows = Array.from(document.querySelectorAll('tr'));
//     let index = 0;
//     let checkedboxesIndeces = [];
//     let checkedboxes = [];
//     let result = [];

//     // get the cols of the checked boxes
//     for (let checkbox of checkboxElements) {
//         if (checkbox.checked === true) {
//             checkedboxesIndeces.push(index);
//             checkedboxes.push(headerElements[index].textContent);
//         }
//         index++;
//     }


//     for (let col of checkedboxesIndeces) {
//         let object = {};
//         let currColData = Array.from(document.querySelectorAll(`tbody tr :nth-child(${col + 1})`));
//         //object[checkedboxes[col]] = currColData[col];

//         for (let td of currColData) {
//             object[checkedboxes[col]] = td.textContent;
//             result.push(object);
//         }
//         // /console.log(currColData);
//         console.log(result);
//     }

//     // for (let col of checkedboxesIndeces) {
//     //     let currColData = Array.from(document.querySelectorAll(`tbody tr :nth-child(${col+1})`));

//     // }

// }

