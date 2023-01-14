function sumFirstLast(arr) {
    const firstElement = Number(arr.shift());
    const lastElement = Number(arr.pop());
    
    return (firstElement + lastElement);
}

console.log(sumFirstLast(['20', '30', '40']));