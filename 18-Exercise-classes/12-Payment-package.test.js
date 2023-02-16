const PaymentPackage = require('./12-Payment-package');
const { expect, assert } = require('chai');

describe("PaymentPackage", function () {
    it('constructor', () => {
        let instance = new PaymentPackage('Name', 100);

        assert.equal(instance._name, 'Name');
        assert.equal(instance._value, 100);
        assert.equal(instance._VAT, 20);
        assert.equal(instance._active, true);
    });
    it("Throw Error when instantiated with one parameter", function () {
        expect(() => { const hrPack = new PaymentPackage('HR Services'); }).to.throw;
    });

    it("Create Instance with wrong parameters should throw Error", function () {
        expect(() => { new PaymentPackage(false, 1); }).to.throw;
    });

    it("Create Instance with wrong parameters should throw Error", function () {
        expect(() => { new PaymentPackage([], 1); }).to.throw;
    });

    it("Create Instance with wrong parameters should throw Error", function () {
        expect(() => { new PaymentPackage('a', '1'); }).to.throw;
    });

    it("Create Instance with wrong parameters should throw Error", function () {
        expect(() => { new PaymentPackage('a', false); }).to.throw;
    });

    it("Create Instance with wrong parameters should throw Error", function () {
        expect(() => { new PaymentPackage(['a', 1]); }).to.throw;
    });

    it("Throw Error when instantiated with wrong parameters", function () {
        expect(() => { const hrPack = new PaymentPackage(false, 'a'); }).to.throw;
    });

    it("Can be instantiated with two parameters - a string name and number value", function () {
        const testClass = new PaymentPackage('a', 1);
        expect(testClass.name).to.equal('a');
        expect(testClass._value).to.equal(1);
    });

    it("Accessor name - used to get and set the value of the name", function () {
        const testClass = new PaymentPackage('a', 1);
        expect(testClass.name).to.equal('a');
    });

    it("Accessor name - used to get and set the value of the name", function () {
        const testClass = new PaymentPackage('a', 1);
        testClass.name = 'b'
        expect(testClass.name).to.equal('b');
    });

    it("Accessor value - used to get and set the value of value", function () {
        const testClass = new PaymentPackage('a', 1);
        expect(testClass.value).to.equal(1);
    });

    it("Accessor value - used to get and set the value of value", function () {
        const testClass = new PaymentPackage('a', 1);
        testClass.value = 5;
        expect(testClass.value).to.equal(5);
    });

    it('Set value to null', () => {
        let instance = new PaymentPackage('Name', 100);
        assert.doesNotThrow(() => { instance.value = 0 })
    });

    it("Accessor VAT - used to get and set the value of VAT", function () {
        const testClass = new PaymentPackage('a', 1);
        expect(testClass.VAT).to.equal(20);
    });

    it("Accessor VAT - used to get and set the value of VAT", function () {
        const testClass = new PaymentPackage('a', 1);
        testClass._VAT = 10;
        expect(testClass.VAT).to.equal(10);
    });

    it("Accessor active - used to get and set the value of active", function () {
        const testClass = new PaymentPackage('a', 1);
        expect(testClass.active).to.equal(true);
    });

    it("Accessor active - used to get and set the value of active", function () {
        const testClass = new PaymentPackage('a', 1);
        testClass.active = false
        expect(testClass.active).to.equal(false);
    });

    it("toString() - return a string, containing an overview of the instance", function () {
        const testClass = new PaymentPackage('a', 1);
        expect(testClass.toString()).to.equal('Package: a\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2');
    });

    it("toString() - if the package is not active,the label 'inactive' is appended to the printed name", function () {
        const testClass = new PaymentPackage('a', 1);
        testClass.active = false;
        expect(testClass.toString()).to.equal('Package: a (inactive)\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2');
    });

    it("Change Instance name with number should throw Error", function () {
        const testClass = new PaymentPackage('a', 1);
        testClass._name = 1;
        expect(() => { testClass._name = 1; }).to.throw;
    });

    it("Change Instance name with empty string should throw Error", function () {
        const testClass = new PaymentPackage('a', 1);
        testClass._name = 1;
        expect(() => { testClass._name = ''; }).to.throw;
    });

    it("Change Instance value with string number should throw Error", function () {
        const testClass = new PaymentPackage('a', 1);
        testClass._value = '1';
        expect(() => { testClass._value = ''; }).to.throw;
    });

    it("Change Instance value with negative number should throw Error", function () {
        const testClass = new PaymentPackage('a', 1);
        testClass._value = -1;
        expect(() => { testClass._value = ''; }).to.throw;
    });

    it("Change Instance VAT with string should throw Error", function () {
        const testClass = new PaymentPackage('a', 1);
        testClass._VAT = '1';
        expect(() => { testClass._VAT = ''; }).to.throw;
    });

    it("Change Instance VAT with negative number should throw Error", function () {
        const testClass = new PaymentPackage('a', 1);
        testClass._VAT = -1;
        expect(() => { testClass._VAT = ''; }).to.throw;
    });

    it("Change Instance active to non-Boolean should throw Error", function () {
        const testClass = new PaymentPackage('a', 1);
        testClass._active = 'false';
        expect(() => { testClass._active = ''; }).to.throw;
    });

    it("Change Instance active to the Boolean false should equal false", function () {
        const testClass = new PaymentPackage('a', 1);
        testClass._active = false;
        expect(testClass._active).to.equal(false);
    });
});