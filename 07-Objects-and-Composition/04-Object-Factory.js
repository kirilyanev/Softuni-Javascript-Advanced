// First try to solve 50/100

// function factory(library, orders) {
//     const result = [];

//     for (let order of orders) {
//         let myFn = library[`${order.parts[0]}`];
//         let currFns = order.parts;
        
//         object = {
//             name: order.template.name,
//         }

//         for (let fn of currFns) {
//             object[`${fn}`] = myFn;
//         }
//         result.push(object);   
//     }

//     return result;
// }

//------------------------------------
// Second solution
function factory(library, orders) {
    const result = [];

    for(let order of orders) {
        const current = Object.assign({}, order.template);
        for (let part of order.parts) {
            current[part] = library[part];
        }
        result.push(current);
    }
    
    return result;
}
//------------------------------------
// Input Data

const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {    
        template: { name: 'BoomBox Stereo'},
        parts: ['play']      
    }
];
const products = factory(library, orders);
console.log(products);
