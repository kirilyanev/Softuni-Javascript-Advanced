class Hex {
    constructor(value) {
        this.number = value;
    }

    valueOf() {
        return this.number;
    };

    toString() {
        return "0x" + (this.number.toString(16)).toUpperCase();
    };

    plus({ number }) {
        if (typeof number == 'number') {
            let firstNumber = this.number;
            let result = firstNumber + number;
            return new Hex(result);
        } else if (typeof number == 'string') {
            let number = parseInt(number, 16);
            let result = this.number + number;
            return new Hex(result);
        }
    };

    minus({ number }) {
        if (typeof number == 'number') {
            let firstNumber = this.number;
            let result = firstNumber - number;
            return new Hex(result);
        } else if (typeof number == 'string') {
            let number = parseInt(number, 16);
            let result = this.number - number;
            return new Hex(result);
        }
    };
    
    parse(string) {
        return parseInt(string, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));