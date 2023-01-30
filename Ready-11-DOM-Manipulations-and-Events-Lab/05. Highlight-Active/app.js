function focused() {
    let inputElements = Array.from(document.querySelectorAll('div input'));
    
    for (const input of inputElements) {
        input.addEventListener('focus', focus);
        input.addEventListener('blur', blur);
    }

    function focus(e) {
        e.target.parentNode.classList = 'focused';
    }

    function blur(e) {
        e.target.parentNode.classList = '';
    }
}