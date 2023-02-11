function validate() {
    let inputElement = document.querySelector('#email');
    let emailRegexCheck = /[a-z]+@[a-z]+\.[a-z]+/gm;
    
    inputElement.addEventListener('change',checkMail);

    function checkMail(e){
        if(emailRegexCheck.test(e.target.value)){
            e.target.removeAttribute('class');
            return;
        }

        e.target.className = 'error';
    }
}
