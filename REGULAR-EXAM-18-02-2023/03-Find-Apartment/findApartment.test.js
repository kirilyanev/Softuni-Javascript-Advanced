const findNewApartment = require('./findApartment');
const { expect } = require('chai');

describe("Tests findNewApartment", function () {
    describe("Tests isGoodLocation(city, nearPublicTransportation)", function () {

        it("Test with invalid city - array []", function () {
            expect(() => findNewApartment.isGoodLocation(['Varna'], true)).to.throw('Invalid input!');
        });

        it("Test with invalid city - number 1", function () {
            expect(() => findNewApartment.isGoodLocation(1, true)).to.throw('Invalid input!');
        });

        it("Test with invalid nearPublicTransportation - string", function () {
            expect(() => findNewApartment.isGoodLocation('Varna', 'true')).to.throw('Invalid input!');
        });

        it("Test with different city - New York", function () {
            expect(findNewApartment.isGoodLocation('New York', true)).to.equal("This location is not suitable for you.");
        });

        it("Test with value of the boolean nearPublicTransportation - false", function () {
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal("There is no public transport in area.");
        });

        it("Test with value of the boolean nearPublicTransportation - true", function () {
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal("You can go on home tour!");
        });
    });

    describe("Tests isLargeEnough (apartments, minimalSquareMeters)", function () {

        it("Test with invalid apartments - '40, 50, 60' ", function () {
            expect(() => findNewApartment.isLargeEnough('40, 50, 60', 45)).to.throw('Invalid input!');
        });

        it("Test with invalid apartments - [] ", function () {
            expect(() => findNewApartment.isLargeEnough([], 45)).to.throw('Invalid input!');
        });

        it("Test with invalid minimalSquareMeters - string '45' ", function () {
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], '45')).to.throw('Invalid input!');
        });

        it("Test with valid parameters", function () {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 45)).to.equal('50, 60');
        });
    });

    describe("Tests isItAffordable (price, budget)", function () {

        it("Test with the price is not a number", function () {
            expect(() => findNewApartment.isItAffordable('1', 5)).to.throw('Invalid input!');
        });

        it("Test with the budget is not a number", function () {
            expect(() => findNewApartment.isItAffordable(1, '5')).to.throw('Invalid input!');
        });

        it("Test with the price is equal to 0", function () {
            expect(() => findNewApartment.isItAffordable(0, 5)).to.throw('Invalid input!');
        });

        it("Test with the budget is equal to 0", function () {
            expect(() => findNewApartment.isItAffordable(1, 0)).to.throw('Invalid input!');
        });

        it("Test with the price bigger than budget", function () {
            expect(findNewApartment.isItAffordable(5, 1)).to.equal("You don't have enough money for this house!");
        });

        it("Test with the budget bigger than price", function () {
            expect(findNewApartment.isItAffordable(1, 5)).to.equal("You can afford this home!");
        });
    });
});