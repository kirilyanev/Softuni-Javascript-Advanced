function notify(message) {
  let divElement = document.querySelector('#notification');
  let paragraphElement = document.createElement('p');
  divElement.addEventListener('click', onclick);

  paragraphElement.textContent = message;
  divElement.appendChild(paragraphElement);
  divElement.style.display = 'block';

  function onclick() {
    divElement.style.display = 'none';
    paragraphElement.remove()
  }
}
