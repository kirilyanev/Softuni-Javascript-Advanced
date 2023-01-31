function lockedProfile() {
    let buttonElements = document.querySelectorAll('button');

    for(let button of buttonElements) {
        button.addEventListener('click', onclick);
    }

    function onclick(e) {
        let lockBtnElement = e.target.parentElement.querySelector('input[type="radio"]');
        let btnElement = e.target;
        let hiddenInfo = e.target.parentElement.querySelector('div');

        if(!lockBtnElement.checked) {
            if(btnElement.textContent === 'Show more') {
                hiddenInfo.style.display = 'block';
                btnElement.textContent = 'Hide it';
            } else if (btnElement.textContent === 'Hide it') {
                hiddenInfo.style.display = 'none';
                btnElement.textContent = 'Show more';
            }
        }
    }
}