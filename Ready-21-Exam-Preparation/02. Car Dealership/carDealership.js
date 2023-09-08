class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model == ''
            || horsepower < 0
            || (horsepower >= 0 && !Number.isInteger(horsepower))
            || price < 0
            || mileage < 0) {
            throw new Error("Invalid input!");
        }
        let car = {
            model: model,
            horsepower: horsepower,
            price: price,
            mileage: mileage
        }

        this.availableCars.push(car);

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    };

    _validateModel(value) {
        return typeof value == 'string' && value != '';
    }
    _validateHorsepower(value) {
        return typeof Number.isInteger(value) && value >= 0;
    }
    _validatePriceAndMilleage(value) {
        value > 0
    }

    sellCar(model, desiredMileage) {
        const index = this.availableCars.findIndex(car => car.model == model);
        const match = this.availableCars[index];

        if (match == undefined) {
            throw new Error(`${model} was not found!`);
        }

        const mileageDifference = match.mileage - desiredMileage;

        const sold = {
            model: match.model,
            horsepower: match.horsepower,
        }

        if (mileageDifference <= 0) {
            //original price
            sold.price = match.price;
        } else if (mileageDifference <= 40000) {
            sold.price = match.price * 0.95;
        } else {
            sold.price = match.price * 0.9;
        }

        this.soldCars.unshift(sold);
        this.availableCars.splice(index, 1);
        this.totalIncome += sold.price;

        return `${model} was sold for ${sold.price.toFixed(2)}$`;
    };

    currentCar() {
        if (this.availableCars.length == 0) {
            return "There are no available cars";
        }

        let cars = `-Available cars:\n`;

        for (let car of this.availableCars) {
            let availableCarData = `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$\n`
            cars += availableCarData;
        }

        return cars.trim();
    }

    salesReport(criteria) {
        if (!this.availableCars[0][criteria]) {
            throw new Error("Invalid criteria!");
        }

        if (criteria == 'horsepower') {
            this.availableCars = this.availableCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria == 'model') {
            this.availableCars = this.availableCars.sort((a, b) => a.localeCompare(b));
        }

        let message = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:\n`

        for (let soldCar of this.soldCars) {
            let soldCarData = `---${soldCar.model} - ${soldCar.horsepower} HP - ${soldCar.price.toFixed(2)}$\n`;
            message += soldCarData;
        }

        return message.trim();
    }
}


// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('Audi A3', 120, 4900, 240000));
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// dealership.sellCar('Toyota Corolla', 230000);
// dealership.sellCar('Mercedes C63', 110000);
// console.log(dealership.salesReport('horsepower'));

let dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.currentCar())
