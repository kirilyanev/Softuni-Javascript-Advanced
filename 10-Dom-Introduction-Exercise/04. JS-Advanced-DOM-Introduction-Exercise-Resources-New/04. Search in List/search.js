function search() {
   let townsElements = Array.from(document.querySelectorAll('#towns li'));
   let searchText = document.getElementById('searchText').value;
   let resultElement = document.getElementById('result');
   let matchesCount = 0;

   console.log(townsElements);
   // let towns = townsElement.textContent.trim().split('   ');

   for (const town of townsElements) {
      if(town.textContent.includes(searchText)) {
         matchesCount++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }

   resultElement.textContent = `${matchesCount} matches found`;
}
