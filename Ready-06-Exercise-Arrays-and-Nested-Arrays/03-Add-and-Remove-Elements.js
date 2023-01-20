function addRemove(commands) {
    const commandsLength = commands.length;
    let number = 1;
    const result = [];

    for (let i = 0; i < commandsLength; i++) {
        let currComand = commands[i];

        if (currComand === 'add') {
            result.push(number);
        } else if(currComand === 'remove') {
            result.pop();
        }

        number++;
    }

    if(result.length !== 0){
        result.forEach(number => {
            console.log(number);
        });
    } else {
        console.log('Empty');
    }
}

addRemove(['add',
    'add',
    'add',
    'add']);
addRemove(['add', 
'add', 
'remove', 
'add', 
'add']);
addRemove(['remove', 
'remove', 
'remove']);