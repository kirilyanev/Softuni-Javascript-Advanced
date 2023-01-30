function create(words) {
   let contentDivElement = document.querySelector('#content');

   for (let word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');

      div.addEventListener('click', (e) => {
         e.target.children[0].style.display = 'block';
      });
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      contentDivElement.appendChild(div);
   }

   function onclick(e) {
      e.target.childNodes[0].style.display = '';
   }
}