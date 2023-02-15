function solve() {
    const taskElement = document.querySelector('#task');
    const descriptionElement = document.querySelector('#description');
    const dateElement = document.querySelector('#date');
    const addBtn = document.querySelector('#add');
    const sections = Array.from(document.querySelectorAll('section'));

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(!taskElement.value || !descriptionElement.value || !dateElement.value) {
            return;
        }
        const article = createDomElement('article');
        const h3 = createDomElement('h3', taskElement.value);
        const pDesc = createDomElement('p', `Description: ${descriptionElement.value}`);
        const pDate = createDomElement('p', `Due Date: ${dateElement.value}`);
        const div = createDomElement('div', null, 'flex');
        const startBtn = createDomElement('button', 'Start', 'green');
        const deleteBtn = createDomElement('button', 'Delete', 'red');

        startBtn.addEventListener('click', startTask);
        deleteBtn.addEventListener('click', deleteTask)

        div.appendChild(startBtn);
        div.appendChild(deleteBtn);
        article.appendChild(h3);
        article.appendChild(pDesc);
        article.appendChild(pDate);
        article.appendChild(div);

        sections[1].querySelector('div:nth-child(2)').appendChild(article);
    });

    function startTask(e) {
        const inProgress = e.target.parentElement.parentElement;
        Array.from(inProgress.querySelectorAll('div button'))[0].className = 'red';
        Array.from(inProgress.querySelectorAll('div button'))[0].textContent = 'Delete';
        Array.from(inProgress.querySelectorAll('div button'))[0].addEventListener('click', deleteTask);

        Array.from(inProgress.querySelectorAll('div button'))[1].className = 'orange';
        Array.from(inProgress.querySelectorAll('div button'))[1].textContent = 'Finish';
        Array.from(inProgress.querySelectorAll('div button'))[1].addEventListener('click', finishTask);

        sections[2].querySelector('#in-progress').appendChild(inProgress);
    }

    function deleteTask(e) {
        e.target.parentElement.parentElement.remove();
    }

    function finishTask(e) {
        const completedTask = e.target.parentElement.parentElement;
        completedTask.querySelector('div').remove();

        sections[3].querySelector('div:nth-child(2)').appendChild(completedTask);
    }

    function createDomElement(type, text, classAttribute) {
        const element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }
        if (classAttribute) {
            element.className = classAttribute;
        }
        return element;
    }
}
