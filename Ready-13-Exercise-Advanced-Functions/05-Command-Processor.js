// First solution
// function solution() {
//     return {
//         string: '',

//         append(string) {
//             this.string = this.string + string
//             return this.string;
//         },
//         removeStart(n) {
//             this.string = this.string.slice(n)
//             return this.string;
//         },
//         removeEnd(n) {
//             this.string = this.string.slice(0, this.string.length - n);
//             return this.string;
//         },
//         print() {
//             return console.log(this.string);
//         }
//     }
// }

// Second solution - same as above but variable 'result' is declared outside the object(closure);
function solution() {
    let result = '';

    return {
        append(str) {
            result += str;
            return result;
        },
        removeStart(n) {
            result = result.slice(n)
            return result;
        },
        removeEnd(n) {
            result = result.slice(0, result.length - n);
            return result;
        },
        print() {
            return console.log(result);
        }
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
