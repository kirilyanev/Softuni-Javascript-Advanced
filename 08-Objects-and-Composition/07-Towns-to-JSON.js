function townsJson(arr) {
    let regex = /\s*\|\s*/gm;
    let towns = [];

    for (let i = 1; i < arr.length; i++) {
        let townData = arr[i].split(regex);
        let town = {
            Town: townData[1],
            Latitude: Number(Number(townData[2]).toFixed(2)),
            Longitude: Number(Number(townData[3]).toFixed(2)),
        }
        towns.push(town);
    }
    console.log(JSON.stringify(towns));
}

townsJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);

townsJson(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);