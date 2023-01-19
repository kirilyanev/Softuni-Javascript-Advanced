// First solution 50/100 in judge

// function solve(input) {
//     let data = JSON.parse(input);
//     let table = [];

//     function escapeChar(input) {
//         return input.toString().replace('<','&lt;').replace('>','&gt;');
//     }

//     table.push('<table>');
//     let props = Object.keys(data[0]);
//     table.push(`  <tr>${props.map(p=> `<th>${p}</th>`).join('')}</tr>`);
//     for (let entry of data) {
//         table.push(`  <tr>${props.map(p=> `<td>${escapeChar(entry[p])}</td>`).join('')}</tr>`);
//     }
//     table.push('</table>');

//     return table.join('\n');
// }

// Second solution 100/100 in judge
function jsonToHtmlable(json) {
    let arr = JSON.parse(json);
    let outputArr = ["<table>"];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");

    function makeKeyRow(arr) {
        let keyRow = '';
        let keyNames = Object.keys(arr[0]);
        keyRow += ("  <tr>");
        for (let key of keyNames) {
            keyRow += `<th>${escapeHtml(key)}</th>`;
        }
        keyRow += "</tr>";
        return keyRow;
    };

    function makeValueRow(object) {
        let valueRow = '';
        let values = Object.values(object);
        
        valueRow += "  <tr>";
        for (let value of values) {
            valueRow += `<td>${escapeHtml(value)}</td>`;
        }
        valueRow += "</tr>";
        return valueRow;
    };
    function escapeHtml(value) {
        return value.toString().replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    };

    console.log(outputArr.join('\n'));
}

{/* <table>
   <tr><th>Name</th><th>Score</th></tr>
   <tr><td>Stamat</td><td>5.5</td></tr>
   <tr><td>Rumen</td><td>6</td></tr>
</table> */}

jsonToHtmlable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);

jsonToHtmlable(`[{"Name":"Pesho",
"Score":4,
"Grade":8},
{"Name":"Gosho",
"Score":5,
"Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`)