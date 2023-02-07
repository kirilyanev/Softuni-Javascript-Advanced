// Imperative solution
// function filterEmployees(string, sortCriteria) {
//     let employees = JSON.parse(string);
//     let [property, value] = sortCriteria.split('-');
//     let sortedEmployees = [];
//     let i = 0;
//     for (let employee of employees) {
        
//         let entries = Object.entries(employee);
//         //0. Ardine Bassam - abassam0@cnn.com
//         let currEmployee = `. ${entries[1][1]} ${entries[2][1]} - ${entries[3][1]}`;
//         if (sortCriteria === 'all') {
//             sortedEmployees.push(currEmployee);
//         } else {
//             if (employee[property] == value) {
//                 sortedEmployees.push(currEmployee);
//             }
//         }
//     }

//     sortedEmployees.forEach((employee,i) => {
//         console.log(i+employee);
//     });
// }

// Functional solution
function filterEmployees(string, sortCriteria) {
    let employees = JSON.parse(string);
    let [property, value] = sortCriteria.split('-');

    employees
        .filter(x => x[property] == value)
        .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
        .forEach(x => console.log(x));
}

// filterEmployees(`[{
//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   },  
// {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }]`,
//     'gender-Female');

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson');
