// function carRegister(carsArr) {
//     const carRegister = {};
//     const modelRegister = {};

//     for (let carData of carsArr) {
//         const [car, model, quantity] = carData.split(' | ');

//         if (!carRegister[car]) {
//             carRegister[car] = [];
//         }

//         if (!carRegister[car].includes(model)) {
//             carRegister[car].push(model);
//         }

//         if (!modelRegister[model]) {
//             modelRegister[model] = 0
//         }

//         modelRegister[model] += Number(quantity);
//     }

//     for (let car in carRegister) {
//         console.log(car);
//         carRegister[car].forEach(c => {
//             console.log(`###${c} -> ${modelRegister[c]}`);
//         });
//     }
// }

function carRegister(carsArr) {
    const register = {};

    for(let carData of carsArr) {
        const [car, model, quantity] = carData.split(' | ');

        if(!register[car]) {
            register[car] = {};
        }
    
        if(!register[car][model]) {
            register[car][model] = 0;
        }

        register[car][model] += Number(quantity);
    }

    for(let car in register) {
        console.log(car);
        for (let model in register[car]) {
            console.log(`###${model} -> ${register[car][model]}`);
        }
    }
}

carRegister(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);
