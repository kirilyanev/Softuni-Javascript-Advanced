const isSymmetric = require('./05-Check-for-Symmetry');
const { expect } = require('chai');

describe('Test for isSymetric(arr)', () => {

    describe('Regular cases', () => {
        it('Should return true on isSymetric([1,2,1])', () => {
            expect(isSymmetric([1, 2, 1])).to.be.true;
        });
        it('Should return false on isSymetric([1,2,-1])', () => {
            expect(isSymmetric([1, 2, -1])).to.be.false;
        });
        it('Should return true on isSymetric([10,20,20,10])', () => {
            expect(isSymmetric([10, 20, 20, 10])).to.be.true;
        });
        it('Should return false on isSymetric([10,20,30,10])', () => {
            expect(isSymmetric([10, 20, 30, 10])).to.be.false;
        });
        it('Should return true on isSymetric(["ivan",new Date(2016,8,15),false,new Date(2016,8,15), "ivan"])', () => {
            expect(isSymmetric(["ivan", new Date(2021, 4, 12), false, new Date(2021, 4, 12), "ivan"])).to.be.true;
        });
        it('Should return false on isSymetric(["ivan",new Date(2016,8,15),false,new Date(2016,8,15), "ivan"])', () => {
            expect(isSymmetric(["ivan", new Date(2013, 2, 11), true, "ivan"])).to.be.false;
        });
    });

    describe('Edge cases', () => {
        it('Should return false on isSymetric(["1",1])', () => {
            expect(isSymmetric(['1', 1])).to.be.false;
        });
        it('Should return true on isSymetric([1])', () => {
            expect(isSymmetric([1])).to.be.true;
        });
        it('Should return true on isSymetric([1])', () => {
            expect(isSymmetric([])).to.be.true;
        });
        it('Should return false on isSymetric([1])', () => {
            expect(isSymmetric('string')).to.be.false;
        });
        it('Should return true on isSymetric([1],[1,2],[1])', () => {
            expect(isSymmetric([1], [1, 2], [1])).to.be.true;
        });
    })
});
