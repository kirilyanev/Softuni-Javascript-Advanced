const mathEnforcer = require('./04-Math-Enforcer');
const { expect } = require('chai');

describe('mathEnforcer',()=>{
    describe('addFive',()=>{
        it('Should return undefined if the parameter is NOT a number',()=>{
            expect(mathEnforcer.addFive('pesho')).to.equal(undefined);
        });
        it('Should return undefined if the parameter is NOT a number',()=>{
            expect(mathEnforcer.addFive()).to.equal(undefined);
        });
        it('Should return undefined if the parameter is NOT a number',()=>{
            expect(mathEnforcer.addFive([])).to.equal(undefined);
        });
        it('Should return undefined if the parameter is NOT a number',()=>{
            expect(mathEnforcer.addFive({})).to.equal(undefined);
        });
        it('Should return the sum of the parameter and 5, if the parameter is a positive number',()=>{
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('Should return the sum of the parameter and 5, if the parameter is a positive number',()=>{
            expect(mathEnforcer.addFive(0)).to.equal(5);
        });
        it('Should return the sum of the parameter and 5, if the parameter is a negative number',()=>{
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        });
        it('Should return the sum of the parameter and 5, if the parameter is a floating point number',()=>{
            expect(mathEnforcer.addFive(10.333)).to.equal(10.333+5);
        });
        it('Should return the sum of the parameter and 5, if the parameter is a floating point number',()=>{
            expect(mathEnforcer.addFive(1.999)).to.equal(5+1.999);
        });
    });
    describe('subtractTen',()=>{
        it('Should return undefined if the parameter is NOT a number',()=>{
            expect(mathEnforcer.subtractTen('pesho')).to.equal(undefined);
        });
        it('Should return undefined if the parameter is NOT a number',()=>{
            expect(mathEnforcer.subtractTen()).to.equal(undefined);
        });
        it('Should return undefined if the parameter is NOT a number',()=>{
            expect(mathEnforcer.subtractTen([])).to.equal(undefined);
        });
        it('Should return undefined if the parameter is NOT a number',()=>{
            expect(mathEnforcer.subtractTen({})).to.equal(undefined);
        });
        it('Should return the sum of the parameter substracted with 10, if the parameter is a positive number',()=>{
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });
        it('Should return the sum of the parameter substracted with 10, if the parameter is a negative number',()=>{
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        });
        it("mathEnforcer.subtractTen(10.001) should be close to 0.001",()=>{
            expect(mathEnforcer.subtractTen(10.001)).to.equal(10.001-10);
         });
    });
    describe('sum',()=>{
        it('Should return undefined if any of the 2 parameters is not a number',()=>{
            expect(mathEnforcer.sum('pesho',1)).to.equal(undefined);
        });
        it('Should return undefined if any of the 2 parameters is not a number',()=>{
            expect(mathEnforcer.sum(1,'pesho')).to.equal(undefined);
        });
        it('Should return undefined if any of the 2 parameters is not a number',()=>{
            expect(mathEnforcer.sum('pesho','pesho')).to.equal(undefined);
        });
        it('Should return undefined if any of the 2 parameters is not a number',()=>{
            expect(mathEnforcer.sum([1],[1])).to.equal(undefined);
        });
        it('Should return undefined if any of the 2 parameters is not a number',()=>{
            expect(mathEnforcer.sum(1,[1])).to.equal(undefined);
        });
        it('Should return undefined if any of the 2 parameters is not a number',()=>{
            expect(mathEnforcer.sum(1,{1:1})).to.equal(undefined);
        });
        it('Should return undefined if any of the 2 parameters is not a number',()=>{
            expect(mathEnforcer.sum(1,undefined)).to.equal(undefined);
        });
        it('mathEnforcer.sum(4,1) should return 5',()=>{
            expect(mathEnforcer.sum(4,1)).to.equal(5);
        });
        it('mathEnforcer.sum(4,1) should return 5',()=>{
            expect(mathEnforcer.sum(0,0)).to.equal(0);
        });
        it('mathEnforcer.sum(4,-1) should return 3',()=>{
            expect(mathEnforcer.sum(4,-1)).to.equal(3);
        });
        it('mathEnforcer.sum(-4,-1) should return -5',()=>{
            expect(mathEnforcer.sum(-4,-1)).to.equal(-5);
        });
        it('mathEnforcer.sum(4,1.5) should return 4+1.5',()=>{
            expect(mathEnforcer.sum(4,1.5)).to.equal(4+1.5);
        });
        it('mathEnforcer.sum(2,-1.5) should return 2-1.5',()=>{
            expect(mathEnforcer.sum(2,-1.5)).to.equal(2-1.5);
        });
        it('mathEnforcer.sum(-2,-1.5) should return -2-1.5',()=>{
            expect(mathEnforcer.sum(-2,-1.5)).to.equal(-2-1.5);
        });
        it("mathEnforcer.sum(10.0001,1.009) should be close to 11.0091",()=>{
            expect(mathEnforcer.sum(10.0001,1.009)).to.equal(10.0001+1.009);
         });
    });
})
