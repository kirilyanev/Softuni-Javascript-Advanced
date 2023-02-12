const lookupChar = require('./03-Char-Lookup');
const { assert } = require('chai');

describe('lookupChar function testing', () => {

    it('Should return undefined if first parameter is not a string', () => {
        assert.equal(lookupChar(5, 10), undefined);
    });

    it('Should return undefined if second parameter is not a integer', () => {
        assert.equal(lookupChar('string', '10'), undefined);
        assert.equal(lookupChar('string', 10.5), undefined);
        assert.equal(lookupChar('string', ['10']), undefined);
        assert.equal(lookupChar('string', {}), undefined);
    });

    it('Should return Incorrect index if the value of index is incorrect', () => {
        assert.equal(lookupChar('string', 10), "Incorrect index");
        assert.equal(lookupChar('string', 6), "Incorrect index");
        assert.equal(lookupChar('string', -3), "Incorrect index");
    });
    
    it('Should return the character at the specified index in the string', () => {
        assert.equal(lookupChar('string', 1), 't');
    });
});