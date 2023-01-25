function solve() {
  let inputElement = document.getElementById('input');
  let text = inputElement.value.split('.').filter(s => s !== '');
  let paragraph = '';
  let divElement = document.getElementById('output');

  for (let i = 0; i < text.length; i += 3) {
    let firstSentence = text[i] || '';
    let secondSentence = text[i + 1] || '';
    let thirdSentence = text[i + 2] || '';

    paragraph += firstSentence + secondSentence + thirdSentence + '.';

    let p = document.createElement("p");
    p.textContent = paragraph;
    divElement.appendChild(p);

    paragraph = '';
  }
}
