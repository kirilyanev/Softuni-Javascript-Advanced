class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    static distance(pointA,pointB) {
        let a = Math.abs(pointA.x - pointB.x);
        let b = Math.abs(pointA.y - pointB.y);
        return Math.sqrt(a**2 + b**2);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
