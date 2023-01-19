function createAssemblyLine() {
    let library = {
        hasClima(object) {
            object['temp'] = 21;
            object['tempSettings'] = 21;
            object['adjustTemp'] = function () {
                if (object.temp < object.tempSettings) {
                    object.temp++;
                } else if (object.temp > object.tempSettings) {
                    object.temp--;
                }
            }
            return object;
        },
        hasAudio(object) {
            object['currentTrack'] = {
                name: null,
                artist: null,
            };
            object['nowPlaying'] = function () {
                if (object.currentTrack.name !== null && object.currentTrack.artist !== null) {
                    console.log(`Now playing '${object.currentTrack.name}' by ${object.currentTrack.artist}`);
                }
            };
            return object;
        },
        hasParktronic(object) {
            object['checkDistance'] = function (number) {
                if (number < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (number >= 0.1 && number < 0.25) {
                    console.log('Beep! Beep!');
                } else if (number >= 0.25 && number < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            }
        },
    }
    return library;
}

// INITIAL SETUP - comes as input aswell
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis',
};

//-----------
// INPUT DATA
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);