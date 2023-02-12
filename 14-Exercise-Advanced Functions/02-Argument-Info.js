function argumentInfo(...args) {
    const count = new Map();

    while (args.length != 0) {
        let element = args.shift();
        let type = typeof element;
        console.log(`${type}: ${element}`);

        if(!count.has(type)){
            count.set(type,0);
        }
        count.set(type,count.get(type) + 1);
    }

    Array.from(count.entries())
    .sort((a,b)=> b[1] - a[1])
    .forEach(element=>console.log(`${element[0]} = ${element[1]}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });
console.log('----------------------------');
argumentInfo({ name: 'bob'}, 3.333, 9.999);