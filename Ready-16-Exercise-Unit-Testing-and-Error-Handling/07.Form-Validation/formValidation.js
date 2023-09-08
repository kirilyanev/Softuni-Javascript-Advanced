function validate() {
    let checkboxButton = document.querySelector('#company');
    let companyInfoElement = document.querySelector('#companyInfo');
    let submitButtonElement = document.querySelector('#submit');
    let validElement = document.querySelector('#valid');

    submitButtonElement.addEventListener('click', submit);
    checkboxButton.addEventListener('change', clicked);

    function clicked(e) {
        if (e.target.checked) {
            companyInfoElement.style.display = "block";
        } else {
            companyInfoElement.style.display = "none";
        }
    }

    function submit(e) {
        e.preventDefault()

        let validation = checkInputs();

        if (validation == 0) {
            validElement.style.display = "block";
        } else if (validation != 0) {
            validElement.style.display = "none";
        }
    }

    function checkInputs() {
        let usernameElement = document.querySelector('#username');
        let emailElement = document.querySelector('#email');
        let passwordElement = document.querySelector('#password');
        let confirmPasswordElement = document.querySelector('#confirm-password');
        let companyNumberElement = document.querySelector('#companyNumber');

        let usernameRegex = /^[A-Za-z0-9]{3,20}$/gm;
        let emailRegex = /^[^@.]+@[^@]*\.[^@]*$/gm;
        let passwordRegex = /^[\w]{5,15}$/gm;

        let isInputValid = 0;
        
        if (usernameElement.value.match(usernameRegex) === null) {
            usernameElement.style.borderColor = "red";
            isInputValid += 1;
        } else {
            usernameElement.style.borderColor = "";
        }

        if (
            passwordElement.value === confirmPasswordElement.value &&
            passwordElement.value.match(passwordRegex) !== null &&
            confirmPasswordElement.value.match(passwordRegex) !== null
            ) {
                passwordElement.style.borderColor = "";
                confirmPasswordElement.style.borderColor = "";
        } else {
            passwordElement.style.borderColor = "red";
            confirmPasswordElement.style.borderColor = "red";
            isInputValid += 1;
        }

        if (emailElement.value.match(emailRegex) === null) {
            emailElement.style.borderColor = "red";
            isInputValid += 1;
        } else {
            emailElement.style.borderColor = "";
        }
        
        if (checkboxButton.checked) {
            if (companyNumberElement.value < 1000 || companyNumberElement.value > 9999) {
                companyNumberElement.style.borderColor = "red";
                isInputValid += 1;
            } else {
                companyNumberElement.style.borderColor = "";
            }
        }
        return isInputValid;
    }
}

// Other similar solution

// function validate() {
//     document.querySelector("#submit").type = "button";
//     document.querySelector("#company").addEventListener("change", (e) => {
//       console.log(e.target);
//       if (document.querySelector("#company").checked) {
//         document.querySelector("#companyInfo").style.display = "block";
//       } else {
//         document.querySelector("#companyInfo").style.display = "none";
//       }
//     });
   
//     document.querySelector("#submit").addEventListener("click", (e) => {
//       let validOut = [];
//       let userName = document.querySelector("#username");
//       let email = document.querySelector("#email");
//       let passWord = document.querySelector("#password");
//       let confirmPass = document.querySelector("#confirm-password");
//       let checkBox = document.querySelector("#company");
//       let userTest = /^[A-Za-z0-9]{3,20}$/;
//       let emailTest = /^[^@.]+@[^@]*\.[^@]*$/;
//       let passTest = /^[\w]{5,15}$/;
   
//       //console.log(checkBox.checked);
   
//       if (userTest.exec(userName.value) === null) {
//         userName.style.borderColor = "red";
//         validOut.push(false);
//       } else {
//         userName.style.borderColor = "";
//         validOut.push(true);
//       }
   
//       if (emailTest.exec(email.value) === null) {
//         email.style.borderColor = "red";
//         validOut.push(false);
//       } else {
//         email.style.borderColor = "";
//         validOut.push(true);
//       }

//       if (
//         passWord.value === confirmPass.value &&
//         passTest.exec(confirmPass.value) != null &&
//         passTest.exec(passWord.value) != null
//       ) {
//         confirmPass.style.borderColor = "";
//         passWord.style.borderColor = "";
//         validOut.push(true);
//       } else {
//         confirmPass.style.borderColor = "red";
//         passWord.style.borderColor = "red";
//         validOut.push(false);
//       }
   
//       if (checkBox.checked) {
//         let company = document.querySelector("#companyNumber");
//         if (company.value < 1000 || company.value > 9999) {
//           company.style.borderColor = "red";
//           validOut.push(false);
//         } else {
//           company.style.borderColor = "";
//           validOut.push(true);
//         }
//       }
   
//       if (!validOut.includes(false)) {
//         document.querySelector("#valid").style.display = "block";
//       } else {
//         document.querySelector("#valid").style.display = "none";
//       }
//     });
//   }
