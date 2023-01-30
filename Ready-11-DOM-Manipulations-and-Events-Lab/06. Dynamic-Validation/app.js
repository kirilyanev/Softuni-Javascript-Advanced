function validate() {
    let inputElement = document.querySelector('#email');
    inputElement.addEventListener('change', changeValidate);
    inputElement.addEventListener('focus', null);

    let regExValidator = /([a-z]+@[a-z]+.[a-z]+)/gm;

    function changeValidate() {
        let email = inputElement.value;
        let isValid = email.match(regExValidator);

        if (!isValid) {
            inputElement.classList = 'error';
        } else {
            inputElement.classList = '';
        }
    }
}
