function rectangle(width,height,color) {
    let finalColor = color[0].toUpperCase()+color.slice(1);

    const rect = {
        width,
        height,
        color: finalColor,
        calcArea(){
            let result = this.width * this.height;
            return result;
        }
    }
    
    return rect;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());