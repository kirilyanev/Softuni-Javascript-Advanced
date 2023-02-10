function validate() {
    let inputElement = document.querySelector('#email');
    let emailRegexCheck = /[a-z]+@[a-z]+\.[a-z]+/gm;

    inputElement.onchange = () => {
        let input = inputElement.value;
        let validEmail = input.match(emailRegexCheck);

        if (validEmail == null) {
            inputElement.classList = 'error';
        } else {
            inputElement.classList = '';
        }
    }
}
