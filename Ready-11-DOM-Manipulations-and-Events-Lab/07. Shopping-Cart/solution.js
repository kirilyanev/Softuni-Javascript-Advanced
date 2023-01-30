function solve() {
   let addBtnElements = Array.from(document.querySelectorAll('button.add-product'));
   let outputElement = document.getElementsByTagName('textarea')[0];
   let checkoutBtnElement = document.querySelector('button.checkout');
   let totalPrice = 0;
   let list = [];

   checkoutBtnElement.addEventListener('click', checkout);

   for (let button of addBtnElements) {
      button.addEventListener('click', onclick);
   }

   function onclick(e) {
      let divProduct = e.target.parentNode.parentNode;
      let divChildren = Array.from(divProduct.childNodes);
      let productName = divChildren[3].firstElementChild.textContent;
      let productPrice = Number(divChildren[7].textContent);

      if (!list.includes(productName)) {
         list.push(productName);
      }

      totalPrice += productPrice;
      outputElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
   }

   function checkout() {
      outputElement.textContent += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`;
      for (let button of addBtnElements) {
         button.removeEventListener('click', onclick);
      }
      checkoutBtnElement.removeEventListener('click', checkout);
   }
}
