function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rowsElements = Array.from(document.querySelectorAll('tbody tr'));
      let searchedWord = document.getElementById('searchField').value;

      for (let row of rowsElements) {
         if(row.className === 'select') {
            row.classList.remove('select');
         }
      }

      for (let row of rowsElements) {
         if (row.textContent.includes(searchedWord)) {
            row.className = 'select';
         }
      }
   }
}