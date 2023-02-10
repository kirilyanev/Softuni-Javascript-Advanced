const mathEnforcer = require('./04-Math-Enforcer');
const { expect } = require('chai');

describe('mathEnforcer',()=>{
    describe('addFive',()=>{
        it('Should return undefined if the parameter is NOT a number',()=>{
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
        });
        it('Should return the sum of the parameter and 5, if the parameter is a positive number',()=>{
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('Should return the sum of the parameter and 5, if the parameter is a negative number',()=>{
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        });
        it('Should return the sum of the parameter and 5, if the parameter is a floating point number',()=>{
            expect(mathEnforcer.addFive(10.333)).to.be.closeTo(15.333,0.01);
        });
    });
    describe('subtractTen',()=>{
        it('Should return undefined if the parameter is NOT a number',()=>{
            expect(mathEnforcer.addFive('25')).to.equal(undefined);
        });
        it('Should return the sum of the parameter substracted with 10, if the parameter is a positive number',()=>{
            expect(mathEnforcer.subtractTen(25)).to.equal(15);
        });
        it('Should return the sum of the parameter substracted with 10, if the parameter is a negative number',()=>{
            expect(mathEnforcer.subtractTen(-25)).to.equal(-35);
        });
        it('Should return the sum of the parameter substracted with 10, if the parameter is a floating point number',()=>{
            expect(mathEnforcer.subtractTen(15.5)).to.be.closeTo(5.5,0.01);
        });
    });
    describe('sum',()=>{
        it('Should return undefined if any of the 2 parameters is not a number',()=>{
            expect(mathEnforcer.sum('4',1)).to.equal(undefined);
        });
        it('Should return undefined if any of the 2 parameters is not a number',()=>{
            expect(mathEnforcer.sum(4,'1')).to.equal(undefined);
        });
        it('Should return their sum if both parameters are numbers',()=>{
            expect(mathEnforcer.sum(4,1)).to.equal(5);
            expect(mathEnforcer.sum(4,-1)).to.equal(3);
            expect(mathEnforcer.sum(4,1.5)).to.be.closeTo(5.5,0.01);
            
        });
    });
})