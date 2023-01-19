function spawn(name) {
    return {
        name,
        greet() {
            console.log(`${this.name} says hello`);
        }
    };
}

function start() {
    const person = spawn('John');
    console.log(person);
    person.greet();
}
start();
