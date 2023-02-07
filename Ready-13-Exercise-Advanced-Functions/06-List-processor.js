function processList(commands) {
    let list = [];
    function process() {
        return {
            add: (str) => { list.push(str) },
            remove: (str) => { list = list.filter(x => x != str) },
            print: () => { console.log(list.join(',')) },
        }
    }

    for (let line of commands) {
        let [command, string] = line.split(' ');
        process()[command](string);
    }
}

processList(['add hello', 'add again', 'remove hello', 'add again', 'print']);
processList(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);