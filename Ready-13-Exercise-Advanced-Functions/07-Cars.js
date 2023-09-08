// A couple of fails

// function cars(commands){
//     let allObjects = {
//     };
//     for(let command of commands) {
//         let [argOne,argTwo,argThree,argFour] = command.split(' ');
//         if (argOne === 'create') {
//             allObjects[argTwo] = {};
//             if(argThree === 'inherit') {
//                 console.log(allObjects[argTwo]);
//                 allObjects[argFour] = allObjects[argTwo];
//             }
//         } else if(argOne === 'set') {
//             allObjects[argTwo][argThree] = argFour;
//         } else if (argOne === 'print') {
//             let result = [];
//             Object.entries(allObjects[argTwo]).forEach(kvp=>result.push(`${kvp[0]}:${kvp[1]}`));
//             console.log(result.join(','));
//         }
//     }
//     console.log(allObjects);
// }

// function cars(commands) {
//     let objects = {};
//     for (let command of commands) {
//         let [argOne, argTwo, argThree, argFour] = command.split(' ');
//         if(argOne === 'create') {
//             objects[argTwo] = {};
//             if (argThree === 'inherit') {
//                 objects[argTwo] = {
//                     __proto__: objects[argFour]
//                 }
//             }
//         } else if(argOne === 'set') {
//             objects[argTwo][argThree] = argFour; 
//         }
//     }
//     console.log(objects);
// }

// function cars(input) {
//     let commands = {
//         create,
//         set,
//         print,
//     }
//     let cars = [];

//     class Obj{
//         constructor(name,key,value){
//             this.name = name;
//         }
//     }

//     function create(name,inherit,parentName) {
//         let createCar = new Obj(name);

//         if(inherit) {
//             class createCar extends parentName{

//             }
//         }

//         return createCar;
//     }
//     function set (name,key,value) {

//     }
//     function print(name) {
//         console.log(Obj.name);
//     }
//     while(input.length != 0) {
//         let [command,name,key,value] = input.shift().split(' ');
//         let car = commands[command](name,key,value);
//     }
// }

// Final solution with the help of ChatGpt

function solve(commands) {
    function closure() {
        let objects = {};

        function create(name, parentName) {
            objects[name] = Object.create(parentName ? objects[parentName] : null);
        }

        function set(name, key, value) {
            objects[name][key] = value;
        }

        function print(name) {
            const object = objects[name];
            let result = [];
            for (let key in object) {
                result.push(`${key}:${object[key]}`);
            }
            console.log(result.join(','));
        }

        return { create, set, print };
    }

    let createSetPrint = closure();

    while (commands.length != 0) {
        let [command, ...params] = commands.shift().split(' ');
        if (command === 'create') {
            createSetPrint[command](params[0], params[2]);
        } else if (command === 'set') {
            createSetPrint[command](params[0], params[1], params[2]);
        } else if (command === 'print') {
            createSetPrint[command](params[0]);
        }
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);
