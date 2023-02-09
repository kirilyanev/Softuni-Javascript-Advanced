const isSymmetric = require('./05-Check-for-Symmetry');
const { expect } = require('chai');

describe('Check for symmetry', () => {

    it('Should take an symmetric array as an argument', () => {
        let input = [1, 2, 3, 2, 1];
        expect(isSymmetric(input)).to.equal(true);
    });
    it('Should return false for incorrect input type', () => {
        let input = 5;
        let input2 = '5';
        let input3 = { 'number': 5 };

        expect(isSymmetric(input)).to.equal(false);
        expect(isSymmetric(input2)).to.equal(false);
        expect(isSymmetric(input3)).to.equal(false);
    });
});
