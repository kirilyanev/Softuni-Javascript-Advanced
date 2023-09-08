const isOddOrEven = require('./02-Even-or-Odd');
const { expect } = require('chai');

describe('isOddOrEven function test', () => {
    // invalid input tests
    it('Should return undefined if typeof input is number', () => {
        expect(isOddOrEven(5)).to.equal(undefined);
    });
    it('Should return undefined if typeof input is array', () => {
        expect(isOddOrEven(['strings', 'inside', 'an', 'array'])).to.equal(undefined);
    });
    it('Should return undefined if typeof input is object', () => {
        expect(isOddOrEven({})).to.equal(undefined);
    });
    it('Should return undefined if typeof input is undefined', () => {
        expect(isOddOrEven(undefined)).to.equal(undefined);
    });
    it('Should return undefined if typeof input is null', () => {
        expect(isOddOrEven(null)).to.equal(undefined);
    });
    // valid input tests
    it('Should return even',()=>{
        expect(isOddOrEven('correct string')).to.equal('even');
    });

    it('Should return odd',()=>{
        expect(isOddOrEven('odd string!')).to.equal('odd');
    });
});
