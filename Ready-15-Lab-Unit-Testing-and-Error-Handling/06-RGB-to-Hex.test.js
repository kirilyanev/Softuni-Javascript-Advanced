const rgbToHexColor = require('./06-RGB-to-Hex');
const { expect } = require('chai');

describe("Test fo rgbToHexColor", () => {
    describe('Regular cases', () => {
        // Tests with numbers in certain ranges
        it('Should return #010101 for rgbToHexColor(1,1,1)', () => {
            expect(rgbToHexColor(1, 1, 1)).to.equal('#010101');
        });
        it('Should return #FFFFFF for rgbToHexColor(255,255,255)', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });
        it('Should return #7CC910 for rgbToHexColor(124, 201, 16)', () => {
            expect(rgbToHexColor(124, 201, 16)).to.equal('#7CC910');
        });
        it('Should return #000000 for rgbToHexColor(0,0,0)', () => {
            expect(rgbToHexColor(0,0,0)).to.equal('#000000');
        });
        it('Should return a string for typeof rgbToHexColor(0,0,0)', () => {
            expect(typeof rgbToHexColor(0,0,0)).to.equal('string');
        });
        it('Should return undefined for rgbToHexColor(-1,1,1)', () => {
            expect(rgbToHexColor(-1, 1, 1)).to.equal(undefined);
        });
        it('Should return undefined for rgbToHexColor(256,1,1)', () => {
            expect(rgbToHexColor(256, 1, 1)).to.equal(undefined);
        });
        it('Should return undefined for rgbToHexColor(1,-1,1)', () => {
            expect(rgbToHexColor(1, -1, 1)).to.equal(undefined);
        });
        it('Should return undefined for rgbToHexColor(1,256,1)', () => {
            expect(rgbToHexColor(-1, 256, 1)).to.equal(undefined);
        });
        it('Should return undefined for rgbToHexColor(1,1,-1)', () => {
            expect(rgbToHexColor(1, 1, -1)).to.equal(undefined);
        });
        it('Should return undefined for rgbToHexColor(1,1,256)', () => {
            expect(rgbToHexColor(1, 1, 256)).to.equal(undefined);
        });
    });

    describe('Edge cases', () => {
        // Tests with other types of input
        it('Should return undefined for rgbToHexColor("1",1,1)', () => {
            expect(rgbToHexColor('1', 1, 1)).to.equal(undefined);
        });
        it('Should return undefined for rgbToHexColor(1,"1",1)', () => {
            expect(rgbToHexColor(1, '1', 1)).to.equal(undefined);
        });
        it('Should return undefined for rgbToHexColor(1,1,"1")', () => {
            expect(rgbToHexColor(1, 1, '1')).to.equal(undefined);
        });
        it('Should return undefined for rgbToHexColor([1],1,1)', () => {
            expect(rgbToHexColor([1], 1, 1)).to.equal(undefined);
        });
        it('Should return undefined for rgbToHexColor(1,[1],1)', () => {
            expect(rgbToHexColor(1, [1], 1)).to.equal(undefined);
        });
        it('Should return undefined for rgbToHexColor(1,1,[1])', () => {
            expect(rgbToHexColor(1, 1, [1])).to.equal(undefined);
        });
        it('Should return undefined for rgbToHexColor({},1,1)', () => {
            expect(rgbToHexColor({}, 1, 1)).to.equal(undefined);
        });
        it('Should return undefined for rgbToHexColor(1,{},1)', () => {
            expect(rgbToHexColor(1, {}, 1)).to.equal(undefined);
        });
        it('Should return undefined for rgbToHexColor(1,1,{})', () => {
            expect(rgbToHexColor(1, 1, {})).to.equal(undefined);
        });
        it('Should return undefined for rgbToHexColor(false,1,1)', () => {
            expect(rgbToHexColor(false, 1, 1)).to.equal(undefined);
        });
        it('Should return undefined for rgbToHexColor(1,null,1)', () => {
            expect(rgbToHexColor(1, null, 1)).to.equal(undefined);
        });
        it('Should return undefined for rgbToHexColor(1,1,undefined)', () => {
            expect(rgbToHexColor(1, 1, undefined)).to.equal(undefined);
        });
        it('Should return undefined for rgbToHexColor([1],"1",{1:1})', () => {
            expect(rgbToHexColor([1],'1',{1:1})).to.equal(undefined);
        });
    })
});