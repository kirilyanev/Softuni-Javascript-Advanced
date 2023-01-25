function extract(content) {
    let textElement = document.getElementById('content').textContent;
    let pattern = /\(([^()]+)\)/gm;
    let matches = [...textElement.matchAll(pattern)];
    let result = [];

    for (let match of matches) {
        result.push(match[1]);
    }
    return result.join('; ');
}