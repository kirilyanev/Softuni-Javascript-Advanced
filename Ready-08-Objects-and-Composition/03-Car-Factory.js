function carFactory(requirements) {
    let car = {};
    const engines = {
        small: {power:90,volume:1800},
        normal: {power:120,volume:2400},
        monster: {power:200,volume:3500},
    };

    let requiredEngine = requirements.power;

    if (requiredEngine <= 90) {
        requiredEngine = 'small';
    } else if(requiredEngine <= 120) {
        requiredEngine = 'normal';
    } else {
        requiredEngine = 'monster';
    }

    if (requirements.wheelsize % 2 === 0) {
        requirements.wheelsize -= 1;
    };

    let wheel = requirements.wheelsize;
    let wheels = [wheel,wheel,wheel,wheel];

    car.model = requirements.model;
    car.engine = engines[requiredEngine];
    car.carriage = {type: requirements.carriage, color: requirements.color};
    car.wheels = wheels;
    return car;
}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));

console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));