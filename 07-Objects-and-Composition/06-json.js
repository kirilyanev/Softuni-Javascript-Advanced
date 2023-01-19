function solve(dataAsJson) {
    let data = JSON.parse(dataAsJson);
    let table = [];

    table.push('<table>');
    let props = Object.keys(data[0]);
    table.push(`  <tr>${props.map(p=> `<th>${p}</th>`).join('')}</tr>`);
    for (let entry of data) {
        table.push(`  <tr>${props.map(p=> `<td>${entry[p]}</td>`).join('')}</tr>`);
    }
    table.push('</table>');

    return table.join('\n');
}

{/* <table>
   <tr><th>Name</th><th>Score</th></tr>
   <tr><td>Stamat</td><td>5.5</td></tr>
   <tr><td>Rumen</td><td>6</td></tr>
</table> */}

console.log(solve(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`));

console.log(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);