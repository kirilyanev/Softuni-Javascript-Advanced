function solve() {
  let textareaElements = document.querySelectorAll('textarea');
  let inputFurniture = textareaElements[0];
  let outputElement = textareaElements[1];

  let buttonElements = document.querySelectorAll('button');

  let tbodyElement = document.querySelector('tbody');
  let generateButtonElement = buttonElements[0];
  let buyButtonElement = buttonElements[1];
  
  generateButtonElement.addEventListener('click', generateFurniture);
  buyButtonElement.addEventListener('click', buyFurniture)

  function generateFurniture() {
    let furnitures = JSON.parse(inputFurniture.value);

    for(let i = 0; i < furnitures.length; i++) {
      let furniture = furnitures[i];

      let imgTd = document.createElement('td');
      let img =  document.createElement('img');
      img.src = furniture.img;
      imgTd.appendChild(img);

      let nameTd = document.createElement('td');
      let nameParagraph = document.createElement('p');
      nameParagraph.textContent = furniture.name;
      nameTd.appendChild(nameParagraph);

      let priceTd = document.createElement('td');
      let priceParagraph = document.createElement('p');
      priceParagraph.textContent = furniture.price;
      priceTd.appendChild(priceParagraph);

      let decFactorTd = document.createElement('td');
      let decFactorParagraph = document.createElement('p');
      decFactorParagraph.textContent = furniture.decFactor;
      decFactorTd.appendChild(decFactorParagraph);

      let markTd = document.createElement('td');
      let markInput = document.createElement('input');
      markInput.type = 'checkbox';
      markTd.appendChild(markInput);

      let newRow = document.createElement('tr');
      newRow.appendChild(imgTd);
      newRow.appendChild(nameTd);
      newRow.appendChild(priceTd);
      newRow.appendChild(decFactorTd);
      newRow.appendChild(markTd);
      tbodyElement.appendChild(newRow);
    }
  }
  
  let boughtFurniture = [];
  let totalPrice = 0;
  let decFactor = 0;

  function buyFurniture() {
    let markedElements = document.querySelectorAll('input[type="checkbox"]');
    for(let markBtn of markedElements) {
      if (markBtn.checked) {
        let currRow = markBtn.parentElement.parentElement;

        let furnitureName = currRow.querySelector('td:nth-child(2)').firstChild.textContent;
        let furniturePrice = currRow.querySelector('td:nth-child(3)').firstChild.textContent;
        let furnitureDecFactor = currRow.querySelector('td:nth-child(4)').firstChild.textContent;

        boughtFurniture.push(furnitureName);
        totalPrice += Number(furniturePrice);
        decFactor += Number(furnitureDecFactor);
      }
    }

    let avgDecFactor = decFactor / boughtFurniture.length;
    let result = `Bought furniture: ${boughtFurniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor}`;
    outputElement.value = result;
  }
}