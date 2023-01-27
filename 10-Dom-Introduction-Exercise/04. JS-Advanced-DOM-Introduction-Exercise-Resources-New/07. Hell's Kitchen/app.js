function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   
   function onClick () {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      
      let avgSalary = 0;
      let bestSalary = 0;
      let totalSalary = 0;
      let output =  {};

      for(let line of input) {
         let [restaurantName,workersData] = line.split(' - ');

         for(let worker of workersData) {
            let [name,salary] = worker.split(' ');
            if(!output.hasOwnProperty(restaurantName)) {
               output[restaurantName] = {};
            }
            if(output.hasOwnProperty(restaurantName)) {
               output[restaurantName][name] = Number(salary);
            }
         }
            
      }
      console.log(output);
   //    let entries = Object.entries(output);

   //    for (let entry of entries) {
   //       //['PizzaHut', 'Peter 500, George 300, Mark 800']
   //       console.log(entry);
   //       let key = entry[0];
   //    }
   }
}