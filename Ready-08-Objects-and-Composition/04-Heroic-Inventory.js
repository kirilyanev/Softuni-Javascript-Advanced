function heroInventory(heroes) {
    let allHeroes = [];

    for (let hero of heroes) {
        let [name,level,items] = hero.split(' / ');
        if (items = items ? items.split(', ') : []);
        let currHero = {
            name: name,
            level: Number(level),
            items: items,
        }

        allHeroes.push(currHero);
    }

    let json = JSON.stringify(allHeroes);
    console.log(json);
}

heroInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);