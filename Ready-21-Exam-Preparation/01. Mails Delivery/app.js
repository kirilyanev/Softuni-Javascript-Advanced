function solve() {
    const recipient = document.querySelector('#recipientName');
    const title = document.querySelector('#title');
    const message = document.querySelector('#message');
    const addButton = document.querySelector('#add');
    const resetButton = document.querySelector('#reset');

    resetButton.addEventListener('click', (e) => {
        e.preventDefault();
        recipient.value = '';
        title.value = '';
        message.value = '';
    })

    addButton.addEventListener('click', onclick);

    function onclick(e) {
        e.preventDefault();
        if (recipient.value == '' ||
            title.value == '' ||
            message.value == '') {
            return;
        }
        // Parent element for the li
        const ulElement = document.querySelector("#list");

        // Create elements
        const li = document.createElement('li');
        const h4Title = document.createElement('h4');
        const h4Recipient = document.createElement('h4');
        const span = document.createElement('span');
        const div = document.createElement('div');
        const sendBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        // Set attributes to the elements
        div.setAttribute("id", "list-action");
        sendBtn.setAttribute("type", "submit");
        sendBtn.setAttribute("id", "send");
        deleteBtn.setAttribute("type", "submit");
        deleteBtn.setAttribute("id", "delete");

        // Set textContent to the elements
        const recipientValue = recipient.value;
        const h4TitleValue = title.value;

        h4Title.textContent = `Title: ${h4TitleValue}`;
        h4Recipient.textContent = `Recipient Name: ${recipientValue}`;
        span.textContent = message.value;
        sendBtn.textContent = "Send";
        deleteBtn.textContent = "Delete";

        sendBtn.addEventListener('click', sendMail);
        deleteBtn.addEventListener('click', deleteMail);

        // Appending the elements for the final structure
        div.appendChild(sendBtn);
        div.appendChild(deleteBtn);
        li.appendChild(h4Title);
        li.appendChild(h4Recipient);
        li.appendChild(span);
        li.appendChild(div);
        ulElement.appendChild(li);

        recipient.value = '';
        title.value = '';
        message.value = '';

        function sendMail(ev) {
            const ulSentMails = document.querySelector('.sent-list');

            // Create elements
            const li = document.createElement('li');
            const spanTo = document.createElement('span');
            const spanTitle = document.createElement('span');
            const div = document.createElement('div');
            const button = document.createElement('button');

            // Set attributes to the elements
            div.className = "btn";
            button.setAttribute("type", "submit");
            button.setAttribute("class", "delete");

            // Set textContent of the elements
            spanTo.textContent = `To: ${recipientValue}`;
            spanTitle.textContent = `Title: ${h4TitleValue}`;
            button.textContent = "Delete";


            button.addEventListener('click', deleteMail);

            // Appending elements
            div.appendChild(button);
            li.appendChild(spanTo);
            li.appendChild(spanTitle);
            li.appendChild(div);
            ulSentMails.appendChild(li);
            ev.target.parentElement.parentElement.remove();
        }

        function deleteMail(e) {
            const deletedMails = document.querySelector('.delete-list');

            // Create Elements
            const li = document.createElement('li');
            const spanTo = document.createElement('span');
            const spanTitle = document.createElement('span');

            // Set textContent to elements
            spanTo.textContent = `To: ${recipientValue}`;
            spanTitle.textContent = `Title: ${h4TitleValue}`;

            // Appending elements
            li.appendChild(spanTo);
            li.appendChild(spanTitle);
            deletedMails.appendChild(li);
            e.target.parentElement.parentElement.remove();
        }

    }
}
solve()
