const rentCar = require('./rentCar');
const { expect } = require('chai');

describe("Tests rentCar", function () {
    describe("searchCar(shop, model)", function () {
        it("finds one car", function () {
            const shop = ['a', 'b', 'c'];
            const model = 'a';
            const result = rentCar.searchCar(shop, model);

            expect(result).to.equal('There is 1 car of model a in the catalog!');
        });

        it("finds two cars", function () {
            const shop = ['a', 'b', 'a'];
            const model = 'a';
            const result = rentCar.searchCar(shop, model);

            expect(result).to.equal('There is 2 car of model a in the catalog!');
        });

        it("Invalid shop (number)", function () {
            expect(() => {
                rentCar.searchCar(1, 'a');
            }).to.throw();
        });

        it("Invalid shop (string)", function () {
            expect(() => {
                rentCar.searchCar('abc', 'a');
            }).to.throw();
        });

        it("Invalid model", function () {
            expect(() => {
                rentCar.searchCar(['a', 'b', '1'], 1);
            }).to.throw();
        });

        it("car not found", function () {
            expect(() => {
                rentCar.searchCar(['a', 'b', 'c'], 'd');
            }).to.throw();
        });
    });

    describe("calculatePriceOfCar(model, days)", function () {
        it("Invalid model - number", function () {
            expect(() => {
                rentCar.calculatePriceOfCar(1, 1);
            }).to.throw();
        });

        it("Invalid days - string", function () {
            expect(() => {
                rentCar.calculatePriceOfCar('Audi', '1');
            }).to.throw();
        });

        it("Valid car and days", function () {
            expect(rentCar.calculatePriceOfCar("Mercedes", 2)).to.equal(`You choose Mercedes and it will cost $100!`);
        });

        it("No such model", function () {
            expect(() => {
                rentCar.calculatePriceOfCar('Ferrari', 2);
            }).to.throw()
        });
    });

    describe("checkBudget(costPerDay, days, budget)", () => {
        it("invalid costPerDay", () => {
            expect(() => { rentCar.checkBudget('1', 1, 1) }).to.throw();
        })

        it("invalid days", () => {
            expect(() => { rentCar.checkBudget(1, '1', 1) }).to.throw();
        })

        it("invalid budget", () => {
            expect(() => { rentCar.checkBudget(1, 1, '1') }).to.throw();
        })

        it("Budget is bigger or equal to cost", () => {
            expect(rentCar.checkBudget(1, 1, 1)).to.equal(`You rent a car!`);
        })

        it("Budget is bigger or equal to cost", () => {
            expect(rentCar.checkBudget(10, 2, 55)).to.equal(`You rent a car!`);
        })
        
        it("Budget is less than cost", () => {
            expect(rentCar.checkBudget(10, 1, 5)).to.equal('You need a bigger budget!');
        })
    });
});
