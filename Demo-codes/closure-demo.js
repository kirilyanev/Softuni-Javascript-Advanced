function parent(num1,num2) {
    let find = {
        numberOne:num1,
        numberTwo:num2,
        result:0,

        child() {
            find.result += find.numberOne + find.numberTwo;
        }
    }
    return find;
}

const factoryFn = parent(2,3);  // Creates an object
const myFn = factoryFn.child;   // Points at child() reference in the created object
console.log(factoryFn);         // Print object before myFn() invocation
myFn()                          // Function invoke
console.log(factoryFn);         // Print the object after myFn() invocation
console.log(factoryFn.result);  // Print the property with name result inside the object
