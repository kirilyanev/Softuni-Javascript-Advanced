const sum = require('./04-SumNumbers')
const { assert } = require('chai');

describe('Sum of numbers in an array',()=>{

    it('Should take an array of numbers as an argument',()=>{
        assert.equal(sum([1,2,3,4,5]),15)
    });
    it('Should return the sum of the values of all elements inside the array',()=>{
        assert.equal(sum([1,2,3,4,-5]),5)
    });
});