const flowerShop = require('./flowerShop');
const { expect, assert } = require('chai');

describe("Tests flowerShop", function () {
    describe("Tests calcPriceOfFlowers() function", function () {

        it("returns the multiplies price and quantity", function () {
            expect(flowerShop.calcPriceOfFlowers('flower', 5, 5)).to.equal('You need $25.00 to buy flower!');
        });

        it("result is rounded to the second digits after the decimal point", function () {
            expect(flowerShop.calcPriceOfFlowers('flower', 0, 1)).to.equal('You need $0.00 to buy flower!');
        });

        it("throw an error with invalid input", function () {
            expect(() => { flowerShop.calcPriceOfFlowers(1, 1, 1) }).to.throw("Invalid input!");
        });

        it("throw an error with invalid input", function () {
            expect(() => { flowerShop.calcPriceOfFlowers(['flower'], 1, 1) }).to.throw("Invalid input!");
        });

        it("throw an error with invalid input", function () {
            expect(() => { flowerShop.calcPriceOfFlowers('flower', '1', 1) }).to.throw("Invalid input!");
        });

        it("throw an error with invalid input", function () {
            expect(() => { flowerShop.calcPriceOfFlowers('flower', 1, '1') }).to.throw("Invalid input!");
        });
    });

    describe("Tests checkFlowersAvailable() function", function () {

        it("if flower is present in the array", function () {
            expect(flowerShop.checkFlowersAvailable("Rose", ["Rose", "Lily", "Orchid"])).to.equal(`The Rose are available!`)
        });

        it("if flower is not present in the array", function () {
            expect(flowerShop.checkFlowersAvailable("Daisy", ["Rose", "Lily", "Orchid"])).to.equal(`The Daisy are sold! You need to purchase more!`)
        });
    });

    describe("Tests sellFlowers() function", function () {

        it("remove element from gardenArr", function () {
            let output = "Rose / Orchid"
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.equal(output);
        });

        it("invalid first parameter", function () {
            expect(() => { flowerShop.sellFlowers("Rose,Lily,Orchid", 1) }).throw("Invalid input!");
        });

        it("invalid second parameter - string", function () {
            expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], '1') }).throw("Invalid input!");
        });

        it("second parameter is negative number - out of range", function () {
            expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1) }).throw("Invalid input!");
        });

        it("second parameter is bigger than gardenArr.length number - out of range", function () {
            expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 5) }).throw("Invalid input!");
        });

    });
});
