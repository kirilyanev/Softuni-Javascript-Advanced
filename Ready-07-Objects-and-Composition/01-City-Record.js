function setProperties(name, population, treasury) {
    const result = {};
    result.name = name;
    result.population = population;
    result.treasury = treasury;
    return result;
}

console.log(setProperties('Tortuga',
7000,
15000));