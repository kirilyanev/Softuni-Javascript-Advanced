function sortNames(namesArr) {
    let result = namesArr.sort((a, b) => a.localeCompare(b));
    const resultLength = result.length;

    for (let i = 0; i < resultLength; i++) {
        console.log(`${i+1}.${result[i]}`);
        
    }
}

sortNames(["John", "Bob", "Christina", "Ema"]);