window.addEventListener('load', solve);

function solve() {
    const inputs = Array.from(document.querySelectorAll('form input'));
    const nextBtn = document.querySelector('#next-btn');
    const ulTicketInfoList = document.querySelector('#info-ticket div .first-container ul');
    const ulConfirmTicket = document.querySelector('#confirm-ticket-section div .first-container ul');
    const divMain = document.querySelector('#main');
    const bodyElement = document.querySelector('#body');

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();

        for (const input of inputs) {
            if (input.value == '') {
                return;
            }
        }

        // Create elements
        const li = document.createElement('li');
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const pDate = document.createElement('p');
        const pDays = document.createElement('p');
        const pPeople = document.createElement('p');
        const editBtn = document.createElement('button');
        const continueBtn = document.createElement('button');

        const firstName = inputs[0].value;
        const lastName = inputs[1].value;
        const date = inputs[3].value;
        const days = inputs[4].value;
        const people = inputs[2].value;

        // Set attributes and textContent
        li.className = 'ticket';
        h3.textContent = `Name: ${firstName} ${lastName}`;
        pDate.textContent = `From date: ${date}`;
        pDays.textContent = `For ${days} days`;
        pPeople.textContent = `For ${people} people`;
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';

        // Append elements
        article.appendChild(h3);
        article.appendChild(pDate);
        article.appendChild(pDays);
        article.appendChild(pPeople);
        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);
        ulTicketInfoList.appendChild(li);

        for (const input of inputs) {
            input.value = '';
            console.log(input.value);
        }

        nextBtn.disabled = true;
        editBtn.disabled = false;
        continueBtn.disabled = false;

        editBtn.addEventListener('click', (e) => {
            inputs[0].value = firstName;
            inputs[1].value = lastName;
            inputs[2].value = people;
            inputs[3].value = date;
            inputs[4].value = days;

            nextBtn.disabled = false;
            e.target.parentElement.remove();
        })

        continueBtn.addEventListener('click', (e) => {
            const liConfirmTicket = e.target.parentElement.cloneNode(true);
            const confirmBtn = document.createElement('button');
            const cancelBtn = document.createElement('button');

            confirmBtn.className = 'confirm-btn';
            confirmBtn.textContent = 'Confirm';
            cancelBtn.className = 'cancel-btn';
            cancelBtn.textContent = 'Cancel';

            confirmBtn.addEventListener('click', () => {
                divMain.remove();
                const h1 = document.createElement('h1');
                const backBtn = document.createElement('button');

                h1.setAttribute('id', 'thank-you');
                h1.textContent = "Thank you, have a nice day!";

                backBtn.setAttribute('id', 'back-btn');
                backBtn.textContent = "Back";

                backBtn.addEventListener('click', () => {
                    window.location.reload();
                })

                bodyElement.appendChild(h1);
                bodyElement.appendChild(backBtn);
            })

            cancelBtn.addEventListener('click', (e) => {
                e.target.parentElement.remove();
                nextBtn.disabled = false;

            })

            liConfirmTicket.className = 'ticket-content';
            liConfirmTicket.querySelector('.edit-btn').remove();
            liConfirmTicket.querySelector('.continue-btn').remove();

            liConfirmTicket.appendChild(confirmBtn);
            liConfirmTicket.appendChild(cancelBtn);
            ulConfirmTicket.appendChild(liConfirmTicket);
            e.target.parentElement.remove();
        })
    })
}




