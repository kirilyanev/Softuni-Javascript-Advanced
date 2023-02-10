function validate() {
    let usernameElement = document.querySelector('#username');
    let emailElement = document.querySelector('#email');
    let passwordElement = document.querySelector('#password');
    let confirmPasswordElement = document.querySelector('#confirm-password');
    let checkboxButton = document.querySelector('#company');
    let companyInfoElement = document.querySelector('#companyInfo');
    let companyNumberElement = document.querySelector('#companyNumber');
    let submitButtonElement = document.querySelector('#submit');
    let validElement = document.querySelector('#valid');

    let usernameRegex = /[a-z0-9]+/gm;
    let passwordRegex = /[a-z0-9_]+/gm;

    submitButtonElement.addEventListener('click', submit);
    checkboxButton.addEventListener('click', clicked);

    function clicked(e) {
        if (e.target.checked) {
            companyInfoElement.style.display = "block";
        } else {
            companyInfoElement.style.display = "none";
        }
    }

    function submit(e) {
        e.preventDefault()

        usernameElement.style.border = "";
        emailElement.style.border = "";
        passwordElement.style.border = "";
        confirmPasswordElement.style.border = "";
        companyNumberElement.style.border = "";

        let validation = checkInputs(usernameElement, emailElement, passwordElement, confirmPasswordElement, companyNumberElement);

        if (validation == 0) {
            validElement.style.display = "block";


        } else if (validation != 0) {
            validElement.style.display = "none";
        }
    }

    function checkInputs(username, email, password, confirmPassword, companyNumber) {
        let validUsername = username.value.match(usernameRegex);
        let validPassword = password.value.match(passwordRegex);
        let emailAmpersandIndex = email.value.indexOf('@');
        let emailPeriodIndex = email.value.indexOf('.');
        let isInputValid = 0;

        if (validUsername == null || validUsername[0].length < 3 && validUsername[0] > 20) {
            username.style.borderColor = "red";
            isInputValid += 1;
        }

        if (validPassword == null || validPassword[0].length < 5 && validPassword[0] > 15 || password.value !== confirmPassword.value) {
            password.style.borderColor = "red";
            confirmPassword.style.borderColor = "red";
            isInputValid += 1;
        }

        if (emailAmpersandIndex == -1 || emailPeriodIndex == -1 || emailAmpersandIndex > emailPeriodIndex) {
            email.style.borderColor = "red";
            isInputValid += 1;
        }

        if (checkboxButton.checked) {
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = "red";
                isInputValid += 1;
            }
        }
        return isInputValid;
    }
}
