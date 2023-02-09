const rgbToHexColor = require('./06-RGB-to-Hex');
const { expect } = require('chai');

describe("Convert RGB to HEX color", () => {
    it('Should take three integer numbers within the range [0…255]', () => {
        let red = 55;
        let green = 144;
        let blue = 234;
        expect(rgbToHexColor(red,green,blue)).to.equal('#3790EA');
    });
    it('Should return a string',()=>{
        let red = 55;
        let green = 144;
        let blue = 234;
        expect(typeof rgbToHexColor(red,green,blue)).to.equal('string');
    });
    it('Should return undefined if input type is invalid or is not in expected range',()=>{
        let red = 55;
        let green = 555;
        let blue = 234;
        expect(typeof rgbToHexColor(red,green,blue)).to.equal('undefined');
    });
});