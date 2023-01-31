function encodeAndDecodeMessages() {
    let textareaElements = document.querySelectorAll('textarea');
    let btnElements = document.querySelectorAll('button');
    let receivedMessage = '';

    btnElements[0].addEventListener('click', encodeMsg);
    btnElements[1].addEventListener('click', result);

    function encodeMsg() {
        let encodedMessage = '';
        receivedMessage = textareaElements[0].value;

        for (const char of receivedMessage) {
            let encodedChar = char.charCodeAt() + 1;
            encodedMessage += String.fromCharCode(encodedChar);
        }
        textareaElements[0].value = '';
        textareaElements[1].value = encodedMessage;
    }

    function result() {
        textareaElements[1].value = receivedMessage;
    }
}
