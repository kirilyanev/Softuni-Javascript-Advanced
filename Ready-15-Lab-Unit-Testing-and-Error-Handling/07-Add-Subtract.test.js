const createCalculator = require('./07-Add-Subtract');
const { expect } = require('chai');

describe('Function that returns a module, containing other functions', () => {
    it('Should return a module (object), containing the functions add(), subtract() and get() as properties', () => {
        let output = createCalculator();

        expect(typeof output).to.equal('object');
        expect(output.hasOwnProperty('add')).to.equal(true);
        expect(output.hasOwnProperty('subtract')).to.equal(true);
        expect(output.hasOwnProperty('get')).to.equal(true);
    });
    it('Should keep an internal sum that can’t be modified from the outside', () => {
        let output = createCalculator(5);
        expect(output.get()).to.equal(0);
    });
    it('Should pass a parameter to the functions add() and subtract() that can be parsed as a number (either a number or a string containing a number) that is added or subtracted from the internal sum', () => {
        let output = createCalculator();
        output.add('fd');
        let internalSum = output.get();

        expect(internalSum).to.be.NaN;
    });    it('Should pass a parameter to the functions add() and subtract() that can be parsed as a number (either a number or a string containing a number) that is added or subtracted from the internal sum', () => {
        let output = createCalculator();
        output.add('5');
        output.subtract(3)
        let internalSum = output.get();

        expect(internalSum).to.equal(2);
    });
});