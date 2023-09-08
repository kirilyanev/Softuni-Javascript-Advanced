function solve() {
    const firstName = document.querySelector('#fname');
    const lastName = document.querySelector('#lname');
    const email = document.querySelector('#email');
    const birth = document.querySelector('#birth');
    const position = document.querySelector('#position');
    const salary = document.querySelector('#salary');
    const button = document.querySelector('#add-worker');
    const sumElement = document.querySelector('#sum');
    let salarySum = 0;

    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (firstName.value || lastName.value || email.value || birth.value || position.value || salary.value) {
            const table = document.querySelector('#tbody');
            const sum = document.querySelector('#sum');
            const tr = document.createElement('tr');

            salarySum += Number(salary.value);
            sumElement.textContent = salarySum.toFixed(2);

            createElement('td', firstName.value, tr);
            createElement('td', lastName.value, tr);
            createElement('td', email.value, tr);
            createElement('td', birth.value, tr);
            createElement('td', position.value, tr);
            createElement('td', salary.value, tr);

            const firedBtn = document.createElement('button');
            const editBtn = document.createElement('button');

            firedBtn.textContent = 'Fired';
            firedBtn.className = 'fired';
            editBtn.textContent = 'Edit';
            editBtn.className = 'edit';

            firedBtn.addEventListener('click', fireWorker);
            editBtn.addEventListener('click', editWorker);

            tr.appendChild(firedBtn);
            tr.appendChild(editBtn);
            table.appendChild(tr);

            firstName.value = '';
            lastName.value = '';
            email.value = '';
            birth.value = '';
            position.value = '';
            salary.value = '';
        }
    });

    function fireWorker(e) {
        const tdElements = Array.from(e.target.parentElement.querySelectorAll('td'));
        const sum = document.querySelector('#sum');
        salarySum -= (Number(tdElements[5].textContent));
        sumElement.textContent = salarySum < 0 ? 0 : salarySum.toFixed(2);
        e.target.parentElement.remove();
    };

    function editWorker(e) {
        const tdElements = Array.from(e.target.parentElement.querySelectorAll('td'));
        const sum = document.querySelector('#sum');

        salarySum -= (Number(tdElements[5].textContent)).toFixed(2);
        sumElement.textContent = salarySum < 0 ? 0 : salarySum.toFixed(2);

        firstName.value = tdElements[0].textContent;
        lastName.value = tdElements[1].textContent;
        email.value = tdElements[2].textContent;
        birth.value = tdElements[3].textContent;
        position.value = tdElements[4].textContent;
        salary.value = tdElements[5].textContent;

        e.target.parentElement.remove();
    };

    function createElement(type, content, parent) {
        const element = document.createElement(type);
        element.textContent = content;
        parent.appendChild(element);
        return element;
    };
}

// Second solution

// function solve() {
//     const firstNameElement = document.querySelector('#fname');
//     const lastNameElement = document.querySelector('#lname');
//     const emailElement = document.querySelector('#email');
//     const birthElement = document.querySelector('#birth');
//     const positionElement = document.querySelector('#position');
//     const salaryElement = document.querySelector('#salary');
//     const button = document.querySelector('#add-worker');

//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//         if (
//             validateInputs(firstNameElement.value) ||
//             validateInputs(lastNameElement.value) ||
//             validateInputs(birthElement.value) ||
//             validateInputs(emailElement.value) ||
//             validateInputs(positionElement.value) ||
//             validateInputs(salaryElement.value)
//         ) {
//             return;
//         };

//         const trElement = document.createElement('tr');
//         const firedBtn = document.createElement('button');
//         const editBtn = document.createElement('button');
//         const tdElement = document.createElement('td');

//         firedBtn.className = 'fired';
//         firedBtn.textContent = 'Fired';
//         editBtn.className = 'edit';
//         editBtn.textContent = 'Edit';

//         firedBtn.addEventListener('click', fireWorker);
//         editBtn.addEventListener('click', editWorker);

//         const firstName = createTd(firstNameElement.value);
//         const lastName = createTd(lastNameElement.value);
//         const email = createTd(emailElement.value);
//         const birth = createTd(birthElement.value);
//         const position = createTd(positionElement.value);
//         const salary = createTd(salaryElement.value);

//         tdElement.appendChild(firedBtn);
//         tdElement.appendChild(editBtn);

//         trElement.appendChild(firstName);
//         trElement.appendChild(lastName);
//         trElement.appendChild(email);
//         trElement.appendChild(birth);
//         trElement.appendChild(position);
//         trElement.appendChild(salary);
//         trElement.appendChild(tdElement)
//         const tableElement = document.querySelector('#tbody');
//         const sumElement = document.querySelector('#sum');

//         sumElement.textContent = (Number(sumElement.textContent) + Number(salaryElement.value)).toFixed(2)
//         tableElement.appendChild(trElement);

//         firstNameElement.value = '';
//         lastNameElement.value = '';
//         emailElement.value = '';
//         birthElement.value = '';
//         positionElement.value = '';
//         salaryElement.value = '';
//     })

//     function fireWorker(e) {
//         const workerData = Array.from(e.target.parentElement.parentElement.querySelectorAll('td'));
//         const sumElement = document.querySelector('#sum');
//         sumElement.textContent = (Number(sumElement.textContent) - Number(workerData[5].textContent)).toFixed(2);
//         e.target.parentElement.parentElement.remove();
//     };

//     function editWorker(e) {
//         const workerData = Array.from(e.target.parentElement.parentElement.querySelectorAll('td'));

//         firstNameElement.value = workerData[0].textContent;
//         lastNameElement.value = workerData[1].textContent;
//         emailElement.value = workerData[2].textContent;
//         birthElement.value = workerData[3].textContent;
//         positionElement.value = workerData[4].textContent;
//         salaryElement.value = workerData[5].textContent;

//         const sumElement = document.querySelector('#sum');
//         sumElement.textContent = (Number(sumElement.textContent) - Number(workerData[5].textContent)).toFixed(2);

//         e.target.parentElement.parentElement.remove();
//     };

//     function createTd(value) {
//         const tdElement = document.createElement('td');
//         tdElement.textContent = value;
//         return tdElement;
//     };

//     function validateInputs(value) {
//         return (value == '');
//     }
// }
solve()