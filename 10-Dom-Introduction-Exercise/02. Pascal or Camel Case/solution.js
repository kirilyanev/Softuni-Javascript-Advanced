function solve() {
  let text = document.getElementById('text').value.toLowerCase().split(' ');
  let convention = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');

  if (convention === 'Camel Case') {
    text = text.map(w => w[0].toUpperCase() + w.slice(1)).join('');
    text = text[0].toLowerCase() + text.slice(1);
    resultElement.textContent = text;
  } else if (convention === 'Pascal Case') {
    text = text.map(w => w[0].toUpperCase() + w.slice(1)).join('');
    resultElement.textContent = text;
  } else {
    resultElement.textContent = 'Error!';
  }
}