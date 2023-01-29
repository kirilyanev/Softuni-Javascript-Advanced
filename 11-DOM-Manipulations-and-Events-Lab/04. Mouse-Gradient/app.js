function attachGradientEvents() {
    let gradientElement = document.querySelector('#gradient');
    let resultElement = document.querySelector('#result');

    gradientElement.addEventListener('mousemove', gradientMove);
    gradientElement.addEventListener('mouseout', gradientOut);

    function gradientMove(e) {
        let percent = Math.trunc((e.offsetX / e.target.clientWidth) * 100);
        resultElement.textContent = `${percent}%`;
    }

    function gradientOut() {
        resultElement.textContent = '';
    }
}
