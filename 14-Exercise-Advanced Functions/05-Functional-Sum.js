function add(number) {
    let sum = number;
    
    const f = function(x){
        if (x === undefined) {
            return sum;
        } else {
            sum += x;
            return f;
        }
    }

    f.toString = function () {
        return sum;
    }

    return f;
}

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());
